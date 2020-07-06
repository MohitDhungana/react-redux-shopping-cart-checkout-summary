import React from 'react';

const Items = ({ cartItems }) => {
  return cartItems.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td> {item.quantity}</td>
      <td> {item.price}</td>
    </tr>
  ));
};

export default Items;
