import { GET_SUM, TOGGLE_PROMO_BTN, TYPE_PROMO } from './types';

export const getSum = (items) => (dispatch) => {
  const sum = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  dispatch({
    type: GET_SUM,
    payload: sum,
  });
};

export const togglePromoButton = (flag) => (dispatch) => {
  dispatch({
    type: TOGGLE_PROMO_BTN,
    payload: flag,
  });
};

export const typePromo = (letter) => (dispatch) => {
  dispatch({
    type: TYPE_PROMO,
    payload: letter,
  });
};
