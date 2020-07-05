import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';
const ItemDetails = ({ cartItems }) => {
  return (
    <ul className="collapsible hoverable ">
      <li>
        <div className="collapsible-header ">Show cart item details +</div>
        <div className="collapsible-body">
          <table className="highlight centered">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <Items cartItems={cartItems} />
            </tbody>
          </table>
          {/* <span>Lorem ipsum dolor sit amet.</span> */}
        </div>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({ cartItems: state.checkout.cartItems });

export default connect(mapStateToProps)(ItemDetails);
