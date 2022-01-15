import React, { useState, useEffect } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Button } from "react-bootstrap";
import axios from "axios";

function DataTableFeedbacks(props) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/feedbacks").then((response) => {
      setDatas(response.data);
    });
  }, []);

  const columns = [
    {
      key: "id",
      text: "ID",
      sortable: true,
      cell: (data, index) => {
        return index + 1;
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
      key: "title",
      text: "Sản phẩm",
      sortable: true,
      cell: (data) => {
        return data.title;
      },
    },
    {
      key: "image",
      text: "Hình ảnh",
      sortable: true,
      cell: (data) => {
        return <img className="imgSize" src={data.image} />;
      },
    },
    {
      key: "description",
      text: "Nội dung phản hồi",
      sortable: true,
      cell: (data) => {
        return data.description;
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

export default DataTableFeedbacks;
