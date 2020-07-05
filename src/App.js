import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Provider } from 'react-redux';
import store from './store';

import ApplyDiscount from './components/ApplyDiscount';
import ItemDetails from './components/ItemDetails';
import Transactions from './components/Transactions';

function App() {
  React.useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col s4 m8 offset-s4 offset-m2">
          <Transactions />
          <ItemDetails />
          <ApplyDiscount />
        </div>
      </div>
    </Provider>
  );
}

export default App;
