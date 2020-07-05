import React from 'react';

const Transactions = () => {
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
            <td> $100</td>
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
            <td className="red-text lighten-1">-$20</td>
          </tr>
          <tr>
            <td>VAT 13%</td>
            <td> $23</td>
          </tr>
        </tbody>
      </table>
      <h3 className="center-align">Total: $50</h3>
    </>
  );
};

export default Transactions;
