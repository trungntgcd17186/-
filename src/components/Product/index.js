import React from "react";
import { buyProduct } from "../../actions/cart";
import { connect } from "react-redux";
function Product(props) {
  const product_current = {
    id: props.id,
    title: props.title,
    price: props.price,
    priceSale: props.priceSale,
    image: props.image,
    quantity: props.quantity,
  };
  return (
    <div className="feature__product-box">
      <a className="feature__product-image" data-detail={props.id}>
        <img src={props.image} alt="shirt" className="feature__product-img" />
      </a>
      <a href="detailProduct.html" className="feature__product-name">
        {props.title}
      </a>
      <div className="feature__product-price">
        <span className="feature__product-price-new">{props.price} đ</span>
        <span className="feature__product-price-old">{props.priceSale} đ</span>
      </div>
      <div className="feature__product-like">
        <span className="feature__product-item__like feature__product-item__like--liked">
          <i className="feature__product-item__like-icon-empty far fa-heart"></i>
          <i className="feature__product-item__like-icon-fill fas fa-heart"></i>
          <span className="feature__product-item__like-total">
            (100+ Thích)
          </span>
        </span>
        <div className="feature__product-item__star">
          <i className="feature__product-item__star-gold fas fa-star"></i>
          <i className="feature__product-item__star-gold fas fa-star"></i>
          <i className="feature__product-item__star-gold fas fa-star"></i>
          <i className="feature__product-item__star-gold fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <div
        className="feature__product-btn"
        onClick={() => props.buyProduct(product_current)}
      >
        <a className="feature__product-link">
          <i className="fas fa-shopping-bag"></i>
          <span>Chọn mua</span>
        </a>
      </div>
      <div className="feature__product-item__favourite">
        <i className="fas fa-check"></i>
        <span>yêu thích</span>
      </div>
      <div className="feature__product-item__sale-off">
        <span className="feature__product-item__percent">10%</span>
        <span className="feature__product-item__sale-off-label">GIẢM</span>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (product_current) => dispatch(buyProduct(product_current)),
  };
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
