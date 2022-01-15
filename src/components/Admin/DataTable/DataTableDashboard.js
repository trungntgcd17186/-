import React, { useState, useEffect } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import axios from "axios";

function DataTableDashboard(props) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((response) => {
      let newOrder = response.data.reduce(function (order, topic) {
        return order.concat(topic.order);
      }, []);
      setDatas(newOrder);
    });
  }, []);

  const columns = [
    {
      key: "id",
      text: "ID",
      sortable: false,
      cell: (data, index) => {
        return index + 1;
      },
    },
    {
      key: "imageProduct",
      text: "Hình ảnh sản phẩm",
      sortable: false,
      cell: (data) => {
        return <img className="imgSize" src={data.image} />;
      },
    },
    {
      key: "title",
      text: "Tên Sản phẩm",
      sortable: false,
      cell: (data) => {
        return data.title;
      },
    },
    {
      key: "price",
      text: "Giá",
      sortable: false,
      cell: (data) => {
        return data.price.toLocaleString("vi-VN") + " " + "Đ";
      },
    },
  ];

  const config = {
    page_size: 10,
    show_filter: false,
    show_length_menu: true,
    show_pagination: true,
    pagination: "advance",
  };

  const rowClickedHandler = (event, data, rowIndex) => {};

  return (
    <>
      <ReactDatatable
        responsive
        hover
        config={config}
        records={datas}
        columns={columns}
        onRowClicked={rowClickedHandler}
      />
    </>
  );
}

export default DataTableDashboard;
