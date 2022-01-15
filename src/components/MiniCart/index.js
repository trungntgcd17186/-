import React from "react";
import { deleteProduct } from "../../actions/cart";
import { connect } from "react-redux";
import cartLogo from "../../img/no-cart.png";
import "./miniCart.css";

function MiniCart(props) {
  const sendData = () => {
    props.parentCallback(props.cart.length);
  };
  sendData();
  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          paddingLeft: "5px",
          textAlign: "start",
        }}
      >
        {props.cart.length > 0 ? (
          <p className="product-cart-added">Sản phẩm đã thêm</p>
        ) : (
          ""
        )}
        {props.cart.length > 0 ? (
          props.cart.map((product) => (
            <div key={product.id} style={{ display: "flex" }}>
              <li className="hearder__cart-item">
                <img src={product.image} alt="" className="hearder__cart-img" />
                <div className="header__cart-item-info">
                  <div className="header__cart-item-head">
                    <h5 className="header__cart-item-name">{product.title}.</h5>
                  </div>
                </div>
              </li>
              {product.quantity === undefined ? (
                <div className="header__cart-item-price-wrap">
                  <span className="header__cart-item-price">
                    {product.price + " " + "đ"}
                  </span>
                  <div className="header__cart-item-body">
                    <span
                      className="header__cart-item-remove"
                      onClick={() => props.deleteProduct(product)}
                    >
                      Xoá
                    </span>
                  </div>
                </div>
              ) : (
                <div style={{ width: "40%", marginTop: "5px" }}>
                  <span className="header__cart-item-price">
                    {product.price.toLocaleString("vi-VN") + " " + "đ" + " "}
                  </span>
                  <span className="header__cart-item-quantity">
                    {"x" + product.quantity}
                  </span>
                  <div className="header__cart-item-body">
                    <span
                      className="header__cart-item-remove"
                      onClick={() => props.deleteProduct(product)}
                    >
                      Xoá
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>
            <img
              src={cartLogo}
              alt="no-cart"
              className="header__cart-no-cart-img"
            />
            <p className="header__cart-list-no-cart-msg">
              Chưa có sản phẩm trong giỏ hàng
            </p>
          </div>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
