import React, { useState, useEffect } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Button } from "react-bootstrap";
import axios from "axios";

function DataTableOrders(props) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((response) => {
      setDatas(response.data);
    });
  }, []);

  const columns = [
    {
      key: "id",
      text: "ID",
      sortable: true,
      cell: (data) => {
        return data.id;
      },
    },
    {
      key: "name",
      text: "Tên khách hàng",
      sortable: true,
      cell: (data) => {
        return data.name;
      },
    },
    {
      key: "email",
      text: "Email",
      sortable: true,
      cell: (data) => {
        return data.email;
      },
    },
    {
      key: "numberOfOrders",
      text: "Tổng đơn",
      sortable: true,
      cell: (data) => {
        return data.numberOfOrders;
      },
    },
    {
      key: "total",
      text: "Tổng thanh toán",
      sortable: true,
      cell: (data) => {
        return data.total.toLocaleString("vi-VN") + " " + "Đ";
      },
    },
    {
      key: "paymentMethod",
      text: "Phương thức thanh toán",
      sortable: true,
      cell: (data) => {
        return data.paymentMethod;
      },
    },
    {
      key: "address",
      text: "Địa chỉ",
      sortable: true,
      cell: (data) => {
        return data.address;
      },
    },
    {
      key: "status",
      text: "Trạng thái đơn hàng",
      sortable: true,
      cell: (data) => {
        return "Chưa nhận hàng";
      },
    },
    {
      key: "action",
      text: "Thao tác",
      cell: (data) => {
        return (
          <>
            <Button
              variant="primary"
              className="me-2"
              onClick={(e, data, rowIndex) => rowClickedHandler}
            >
              <i className="fa fa-edit"></i>
            </Button>
            <Button variant="danger">
              <i className="fa fa-trash"></i>
            </Button>
          </>
        );
      },
    },
  ];

  const config = {
    page_size: 5,
    show_filter: true,
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

export default DataTableOrders;
