import React from 'react';

const ApplyDiscount = () => {
  return (
    <ul className="collapsible hoverable">
      <li>
        <div className="collapsible-header ">Use Promo Code +</div>
        <div className="collapsible-body">
          <div className="row valign-wrapper">
            <div className="input-field col s6">
              <input id="input_text" type="text" data-length="10" />
              <label htmlFor="input_text">Promo Code: DISCOUNT</label>
            </div>

            <button
              className="waves-effect waves-light btn-small col s4"
              type="submit"
              name="action"
            >
              Apply Promo Code
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ApplyDiscount;
