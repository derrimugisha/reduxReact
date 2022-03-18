export const increment = (byNumber) => {
  return {
    type: "INCREMENT",
    payload: byNumber,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
