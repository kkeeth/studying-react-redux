export const plus = num => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = num => {
  return { type: "MINUS", payload: { num: num } };
};

export const asyncPlus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "PLUS", payload: { num: num } });
    }, 1000);
  };
};

export const asyncMinus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }, 1000);
  };
};
