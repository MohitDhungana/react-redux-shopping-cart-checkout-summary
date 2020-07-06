import React from 'react';
import { connect } from 'react-redux';

import { getSum } from '../actions/checkoutActions';

const Transactions = ({
  pickupDiscount,
  getSum,
  cartItems,
  sum,
  disableDiscount,
}) => {
  const vat = 0.13 * sum;

  React.useEffect(() => {
    getSum(cartItems);
  }, []);

  const total = sum - pickupDiscount + vat;

  const tooltipText = 'Pick up your order from our store to cut cost.';
  return (
    <>
      <table className="highlight centered hoverable">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sum</td>
            <td> ${sum}</td>
          </tr>
          <tr>
            <td>
              <span
                className="tooltipped underline"
                data-position="bottom"
                data-tooltip={tooltipText}
              >
                Pickup savings
              </span>
            </td>
            <td className="red-text lighten-1">-${pickupDiscount}</td>
          </tr>
          <tr>
            <td>VAT 13%</td>
            <td> ${vat}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="center-align">
        Total: ${disableDiscount ? total - 10 : total}
      </h3>
    </>
  );
};

const mapStateToProps = (state) => ({
  pickupDiscount: state.checkout.pickupDiscount,
  cartItems: state.checkout.cartItems,
  sum: state.checkout.sum,
  disableDiscount: state.checkout.disableDiscount,
});

export default connect(mapStateToProps, { getSum })(Transactions);
