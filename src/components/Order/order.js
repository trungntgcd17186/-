import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import yup from "../../validate/yupGlobal";
import Footer from "../Footer/footer";
import "./order.css";
import { useNavigate } from "react-router-dom";
Order.propTypes = {};

function Order(props) {
  const navigate = useNavigate();
  const stateRedux = useSelector((state) => state.cart);
  const totalPrice = stateRedux.cartAr.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên!"),
    address: yup.string().required("Vui lòng nhập địa chỉ!"),
    phone: yup
      .string()
      .min(10, "Số điện thoại quá ngắn, vui lòng nhập đủ 10 số!")
      .max(10, "Số điện thoại quá dài, vui lòng chỉ nhập 10 số!")
      .matches(phoneRegExp, "Vui lòng nhập số điện thoại gồm 10 số!"),
    email: yup
      .string()
      .required("Vui lòng nhập địa chỉ email!")
      .email("Email invalid"),
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
      numberOfOrders: stateRedux.cartAr.length,
      paymentMethod: "Thanh toán khi nhận hàng",
      order: stateRedux.cartAr,
      total: totalPrice + 20000,
    });
    alert("Cảm ơn bạn đã mua hàng ^^!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const pushData = async (data) => {
    await axios.post("http://localhost:3001/orders", data);
  };

  return (
    <div>
      <div className="grid order-container">
        <ul className="breadcrumb">
          <li>
            <a href="./index.html">Trang chính</a>
          </li>
          <li>
            <a href="./cart.html">Giỏ hàng cá nhân</a>
          </li>
          <li>Thanh toán</li>
        </ul>

        <form
          action=""
          id="form-payment"
          onSubmit={handleSubmit(onOrderSubmit)}
        >
          <div className="address-container">
            <div className="address__header">
              <h1 className="address__heading">Địa chỉ giao hàng</h1>
            </div>
            <div className="address__content">
              <div className="form-group--horizontal">
                <label for="">
                  <span>*</span> Họ và tên
                </label>
                <div className="form-input">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="payment__form-input"
                    placeholder="Nhập tên người nhận hàng"
                    {...register("name")}
                  />
                </div>
              </div>
              {errors.name && <p className="errors">{errors.name.message}</p>}
              <div className="form-group--horizontal">
                <label for="">
                  <span>*</span> Địa chỉ
                </label>
                <div className="form-input">
                  <input
                    id="addAddress"
                    type="text"
                    className="payment__form-input"
                    placeholder="Nhập địa chỉ giao hàng"
                    {...register("address")}
                  />
                  <p className="valid__feedback-address"></p>
                </div>
              </div>
              {errors.address && (
                <p className="errors">{errors.address.message}</p>
              )}
              <div className="form-group--horizontal">
                <label for="">
                  <span>*</span> Số điện thoại
                </label>
                <div className="form-input">
                  <input
                    id="addPhone"
                    type="text"
                    className="payment__form-input"
                    placeholder="Nhập số điện thoại người nhận hàng"
                    {...register("phone")}
                  />
                  <p className="valid__feedback-phone"></p>
                </div>
              </div>
              {errors.phone && <p className="errors">{errors.phone.message}</p>}
              <div className="form-group--horizontal">
                <label for="">Email</label>
                <div className="form-input">
                  <input
                    id="addEmail"
                    type="email"
                    className="payment__form-input"
                    placeholder="Nhập email người nhận hàng"
                    {...register("email")}
                  />
                  <p className="valid__feedback-email"></p>
                </div>
              </div>
              {errors.email && <p className="errors">{errors.email.message}</p>}
              <div className="address__choose">
                <div className="address"></div>
              </div>
            </div>
          </div>

          <div className="container__body">
            <div className="container__header">
              <ul className="container__header-item header-product">
                <li>Sản phẩm</li>
              </ul>
              <ul className="container__header-item element-product">
                <li>Đơn giá</li>
                <li>Số lượng</li>
                <li>Thành tiền</li>
              </ul>
            </div>

            <div className="container__content">
              {stateRedux.cartAr.map((data, index) => (
                <div className="order-product">
                  <div className="product__desc1">
                    <img
                      src={data.image}
                      alt="Product"
                      className="product__img"
                    />
                    <div className="product__text">
                      <label className="form-check-label product__type ms-2">
                        {data.title}
                      </label>
                    </div>
                  </div>
                  <div className="price-quantity-intoMoney">
                    <ul className="content__item containar__product-element">
                      <li>{data.price.toLocaleString("vi-VN") + " " + "đ"}</li>
                      <li>{data.quantity}</li>
                      <li>
                        {(data.price * data.quantity).toLocaleString("vi-VN") +
                          " " +
                          "đ"}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="container__note">
              <div className="container__message">
                <p className="message__heading">Lời nhắn:</p>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  className="input-message"
                  {...register("message")}
                ></textarea>
              </div>
              <div className="container__delivery">
                <p className="delivery__heading">Phí vận chuyển:</p>
                <span className="delivery__fee">20.000 đ</span>
              </div>
            </div>
          </div>

          <div className="container__voucher">
            <h4 className="voucher__heading">Voucher</h4>
            <button className="btn voucher__link">
              <span>Chọn code </span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* <!-- Modal for Voucher --> */}
          {/* <div id="modalVoucher" className="modal-voucher">
         
            <div className="modal-content">
              <div className="modal-display">
                <div className="modal-header">
                  <h2 className="modal-title text-orange">Voucher mua hàng</h2>
                  <span className="close">&times;</span>
                </div>
                <div className="modal-body">
                  <div className="body--flex-column">
                    <img
                      src="./asset/img/apology.png"
                      className="voucher-image"
                      alt="Voucher image"
                    />
                    <p>
                      Chúng tôi rất tiếc là hiện tại chưa có voucher nào. Mong
                      quý khách thông cảm
                      <span>
                        {" "}
                        <i className="fas fa-exclamation"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- End Modal for Voucher --> */}

          <div className="container__payment">
            <div className="payment__header">
              <h4 className="payment__heading">Phương thức thanh toán</h4>
              <div className="container__method">
                <a className="payment-method">Trả tiền khi nhận hàng</a>
              </div>
            </div>
            <div className="payment__body">
              <p className="money-product">
                Tổng tiền của sản phẩm: <span>{totalPrice} đ</span>
              </p>
              <p className="money-delivery">
                Phí giao hàng: <span>20.000 đ</span>
              </p>
              <p className="money-total">
                Tổng thanh toán:
                <span className="total__money total__money-order">
                  {(totalPrice + 20000).toLocaleString("vi-VN") + " " + "đ"}
                </span>
              </p>
            </div>
            <div className="payment__footer">
              <p className="payment__footer-note">
                Nhấn "Thanh toán" đồng nghĩa việc đồng ý tất cả thông tin.
                <a href="#" className="footer-note-link">
                  GanZ Terms
                </a>
              </p>
              <button type="submit" className="btn-pay2">
                Thanh toán
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Order;
