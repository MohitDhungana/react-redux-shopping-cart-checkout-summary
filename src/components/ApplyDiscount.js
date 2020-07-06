import React from 'react';
import { connect } from 'react-redux';

import { togglePromoButton, typePromo } from '../actions/checkoutActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const ApplyDiscount = ({
  disableDiscount,
  promoCode,
  typePromo,
  togglePromoButton,
}) => {
  const onChange = (e) => {
    typePromo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (promoCode === 'DISCOUNT') {
      togglePromoButton(disableDiscount);
      M.toast({ html: 'Promo Code Applied', classes: 'green lighten-1' });
    } else M.toast({ html: 'Incorrect Promo Code', classes: 'red lighten-1' });
  };

  return (
    <form onSubmit={onSubmit}>
      <ul className="collapsible hoverable">
        <li>
          <div className="collapsible-header ">Use Promo Code +</div>
          <div className="collapsible-body">
            <div className="row valign-wrapper">
              <div className="input-field col s6">
                <input
                  id="input_text"
                  type="text"
                  data-length="10"
                  value={promoCode}
                  onChange={onChange}
                />
                <label htmlFor="input_text">
                  Use Promo Code: DISCOUNT to get 10$ off
                </label>
              </div>

              <button
                className={`waves-effect waves-light btn-small col s4 ${
                  disableDiscount ? 'disabled' : null
                }  `}
                type="submit"
                name="action"
              >
                Apply Promo Code
              </button>
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  disableDiscount: state.checkout.disableDiscount,
  promoCode: state.checkout.promoCode,
});

export default connect(mapStateToProps, { togglePromoButton, typePromo })(
  ApplyDiscount
);
