export const incrementProduct = (id) => {
  return {
    type: "INCREMENT_PRODUCT",
    payload: id,
  };
};

export const decrementProduct = (id) => {
  return {
    type: "DECREMENT_PRODUCT",
    payload: id,
  };
};
