import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import DataTableProducts from "./DataTable/DataTableProducts";
import "./style.css";
import { useForm } from "react-hook-form";
import yup from "../../validate/yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";

function Products(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup.object().shape({
    title: yup.string().required("Vui lòng nhập tên sản phẩm!"),
    image: yup.string().required("Vui lòng nhập link hình ảnh sản phẩm!"),
    price: yup
      .number()
      .required("Vui lòng nhập giá sản phẩm!")
      .typeError("Vui lòng nhập giá sản phẩm!"),
    priceSale: yup
      .number()
      .required("Vui lòng nhập giá sản phẩm!")
      .typeError("Vui lòng nhập giá sản phẩm!"),
    category: yup.string().required("Vui lòng nhập giá sản phẩm!"),
    brand: yup.string().required("Vui lòng nhập giá sản phẩm!"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onOrderSubmit = (data) => {
    pushData({
      ...data,
      quantity: 1,
    });
    window.location.reload();
  };
  const pushData = async (data) => {
    await axios.post("http://localhost:3001/products", data);
  };

  return (
    <div className="dashboard-container">
      <DataTableProducts />
      <Button variant="primary" onClick={handleShow}>
        Tạo sản phẩm mới
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo sản phẩm mới</Modal.Title>
        </Modal.Header>
        <form
          action=""
          id="form-payment"
          onSubmit={handleSubmit(onOrderSubmit)}
        >
          <Modal.Body>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              placeholder="Áo sơ mi tay dài..."
              className="form-control"
              {...register("title")}
            />
            {errors.title && <p className="errors">{errors.title.message}</p>}
            <label>Hình ảnh sản phẩm</label>
            <input
              type="text"
              placeholder="Nhập link ảnh sản phẩm"
              className="form-control"
              {...register("image")}
            />
            {errors.image && <p className="errors">{errors.image.message}</p>}
            <label>Giá sản phẩm</label>
            <input
              type="text"
              placeholder="199000"
              className="form-control"
              {...register("price")}
            />
            {errors.price && <p className="errors">{errors.price.message}</p>}
            <label>Giá chưa sale</label>
            <input
              type="text"
              placeholder="300000"
              className="form-control"
              {...register("priceSale")}
            />
            {errors.priceSale && (
              <p className="errors">{errors.priceSale.message}</p>
            )}
            <label>Category</label>
            <input
              type="text"
              placeholder="shirt"
              className="form-control"
              {...register("category")}
            />
            {errors.category && (
              <p className="errors">{errors.category.message}</p>
            )}
            <label>Brand</label>
            <input
              type="text"
              placeholder="Nike"
              className="form-control"
              {...register("brand")}
            />
            {errors.brand && <p className="errors">{errors.brand.message}</p>}
            <label>Description</label>
            <input
              type="text"
              placeholder="Áo sơ mi siêu thoáng mát..."
              className="form-control"
              {...register("description")}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Products;
