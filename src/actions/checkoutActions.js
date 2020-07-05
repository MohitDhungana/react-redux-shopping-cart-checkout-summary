import { GET_SUM, GET_TOTAL } from './types';

export const getSum = (items) => (dispatch) => {
  const sum = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  dispatch({
    type: GET_SUM,
    payload: sum,
  });
};

export const getTotal = (sum, pickupDiscount, vat) => (dispatch) => {
  const total = sum - pickupDiscount + vat;
  dispatch({
    type: GET_TOTAL,
    payload: total,
  });
};
