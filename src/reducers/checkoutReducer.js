import { GET_SUM, TYPE_PROMO, TOGGLE_PROMO_BTN } from '../actions/types';

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
  pickupDiscount: 22,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUM:
      return {
        ...state,
        sum: action.payload,
      };
    case TYPE_PROMO:
      return {
        ...state,
        promoCode: action.payload,
      };
    case TOGGLE_PROMO_BTN:
      return {
        ...state,
        disableDiscount: !action.payload,
      };

    default:
      return state;
  }
};
