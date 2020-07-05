import { GET_ITEMS } from '../actions/types';

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
      quantity: 1,
    },
  ],
  disableDiscount: false,
  promoCode: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      break;
    default:
      return state;
  }
};
