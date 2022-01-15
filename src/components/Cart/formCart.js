import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { deleteProduct } from "../../actions/cart";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
} from "../../actions/quantityProduct";

//==================================================//
import Footer from "../Footer/footer";
//==================================================//

function FormCart(props) {
  //Gọi state Redux
  const stateRedux = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //Đếm số lượng sản phẩm bên cạnh tổng tiền.
  const [totalProduct, setTotalProduct] = useState(0);

  //Tính tổng tiền của tất cả các sản phẩm.
  const totalPrice = stateRedux.cartAr.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  //Tăng số lượng (QUANTITY) của 1 sản phẩm
  const increment = (id) => {
    const action = incrementProduct(id);
    dispatch(action);
  };
  //Giảm số lượng (QUANTITY) của 1 sản phẩm
  const decrement = (id) => {
    const action = decrementProduct(id);
    dispatch(action);
  };
  //Đếm số lượng sản phẩm bên cạnh tổng tiền.
  useEffect(() => {
    stateRedux.cartAr.map((data, index) => setTotalProduct(index + 1));
  });

  return (
    <div>
      {stateRedux.cartAr.map((data, index) => (
        <div className="form-check" key={index}>
          <div class="cart__body">
            <div className="product__item">
              <div className="cart__content">
                <div className="cart__product">
                  <div className="product__desc">
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
                </div>
                <div className="cart__product-element">
                  <p className="product-number product__unit-price">
                    {data.price.toLocaleString("vi-VN") + " " + "đ"}
                  </p>
                  <div className="product__amount">
                    <button
                      className="btn-increment"
                      onClick={() => decrement(data.id)}
                    >
                      -
                    </button>
                    <div className="amount-number">{data.quantity}</div>
                    <button
                      className="btn-increment"
                      onClick={() => increment(data.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="product-number product__into-money">
                    {(data.price * data.quantity).toLocaleString("vi-VN") +
                      " " +
                      "đ"}
                  </p>
                </div>
              </div>
              <div className="cart__operation">
                <a href="#" className="cart__operation-link pb-3">
                  <i
                    onClick={() => props.deleteProduct(data)}
                    className="fas fa-trash"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Total product */}
      <div className="cart-total">
        <div className="cart__total">
          <div className="cart__total-content">
            <div className="total-content">
              <span>
                Tổng cộng: (
                <span className="total-amount text-orange">{totalProduct}</span>
                sản phẩm):
              </span>
              <h1 className="total-money">
                <span>{totalPrice.toLocaleString("vi-VN") + " " + "đ"}</span>
              </h1>
            </div>
            <Link
              type="submit"
              to="/order"
              className="btn-pay2 btn__order text-center"
              onclick="orderToPay()"
            >
              Đặt hàng
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
    total: state.cart.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCart);
