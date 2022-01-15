import * as actionType from "../actions/cartType";

const initialState = {
  cartAr: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        //Hiện thông báo bên phải màn hình khi thêm sản phẩm vào giỏ hàng thành công.
        let textNotification = document.querySelector(".notification-message");
        textNotification.innerHTML = "Thêm vào giỏ hàng thành công ^^";
        textNotification.style.display = "block";
        setTimeout(function () {
          textNotification.style.display = "none";
        }, 3000);
        //=========================================================================//

        return {
          cartAr: [...state.cartAr, action.payload],
        };
      } else {
        let newcart = state.cartAr;
        const objIndex = newcart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1;

          //Hiện thông báo bên phải màn hình khi thêm sản phẩm vào giỏ hàng thành công.
          let textNotification = document.querySelector(
            ".notification-message"
          );
          textNotification.innerHTML = "Thêm vào giỏ hàng thành công ^^";
          textNotification.style.display = "block";
          setTimeout(function () {
            textNotification.style.display = "none";
          }, 3000);
          //=========================================================================//
        }
        return { cartAr: [...newcart] };
      }

    case actionType.DELETE_PRODUCT:
      let newcart = state.cartAr;
      const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id);
      newcart.splice(objIndex, 1);
      console.log(">>newcart", newcart);
      return { cartAr: [...newcart], totalprice: 0 };

    case "INCREMENT_PRODUCT":
      const updatedCart = state.cartAr.map((curElem) => {
        if (curElem.id === action.payload) {
          curElem.quantity += 1;
        }
        return curElem;
      });
      return { ...state, cartAr: updatedCart };

    case "DECREMENT_PRODUCT":
      const updatedCart2 = state.cartAr
        .map((curElem) => {
          if (curElem.id === action.payload && curElem.quantity > 1) {
            curElem.quantity -= 1;
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, cartAr: updatedCart2 };

    default:
      return state;
  }
};

export default cartReducer;
