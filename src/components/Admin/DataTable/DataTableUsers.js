import React, { useState, useEffect } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Button } from "react-bootstrap";
import axios from "axios";

function DataTableUsers(props) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setDatas(response.data);
    });
  }, []);

  const columns = [
    {
      key: "id",
      text: "ID",
      sortable: true,
      cell: (cinema, index) => {
        return index + 1;
      },
    },
    {
      key: "name",
      text: "Tên",
      sortable: true,
      cell: (cinema) => {
        return cinema.name;
      },
    },
    {
      key: "email",
      text: "Email",
      sortable: true,
      cell: (cinema) => {
        return cinema.email;
      },
    },
    {
      key: "role",
      text: "Role",
      sortable: true,
      cell: (cinema) => {
        return cinema.role;
      },
    },
    {
      key: "action",
      text: "Action",
      cell: (cinema) => {
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

export default DataTableUsers;
