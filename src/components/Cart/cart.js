import FormCart from "./formCart";
function Cart() {
  return (
    <div>
      <div className="cart-container">
        <ul className="breadcrumb">
          <li>
            <a href="./index.html">Trang chính</a>
          </li>
          <li>Giỏ hàng cá nhân</li>
        </ul>
        <div className="cart__header">
          <div className="cart-heading">
            <ul className="cart-title">
              <li className="text--center">Sản phẩm</li>
            </ul>
          </div>
          <div className="cart-heading hidden-mb">
            <ul className="cart-title">
              <li>Đơn giá</li>
              <li>Số lượng</li>
              <li>Thành tiền</li>
              <li>Thao tác</li>
            </ul>
          </div>
        </div>

        <FormCart />
      </div>
    </div>
  );
}

export default Cart;
