import React, { useState, useEffect } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Button, Modal } from "react-bootstrap";

import axios from "axios";

function DataTableCategories(props) {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    axios.get("http://localhost:3001/categories").then((response) => {
      setDatas(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/categories/${id}`)
        .then(() => this.setState({ status: 'Delete successful' }));
    setShow(false)
    window.location.reload()
  }
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
      key: "category",
      text: "Danh mục sản phẩm",
      sortable: true,
      cell: (data) => {
        return data.category;
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
            <Button variant="danger" onClick={handleShow}>
              <i className="fa fa-trash"></i>
            </Button>
            

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có muốn xoá không?</Modal.Title>
        </Modal.Header>
        
          <Modal.Body>
            
            
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleDelete(data.id)}}>
              Xoá
            </Button>
          </Modal.Footer>
      
      </Modal>
          </>
        );
      },
    },
  ];

  const config = {
    page_size: 10,
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

export default DataTableCategories;
