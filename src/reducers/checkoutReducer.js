import { GET_SUM, GET_TOTAL } from '../actions/types';

const initialState = {
  cartItems: [
    {
      id: 1,
      name: 'chair',
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: 'keyboard',
      price: 50,
      quantity: 2,
    },
  ],
  disableDiscount: false,
  promoCode: '',
  sum: 0,
  total: 0,
  pickupDiscount: 22,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUM:
      return {
        ...state,
        sum: action.payload,
      };
    case GET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
