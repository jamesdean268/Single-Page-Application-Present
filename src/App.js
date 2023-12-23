import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div className="voucher-container">
      <h1 className="voucher-heading">Merry Christmas Nicole!</h1>
      <div className="voucher-textbox">
        <p>Voucher for 1x ticket to Miss Saigon in Adelaide in January</p>
        <a href="https://miss-saigon.com.au/tickets/" className="voucher-link">
          Click here to purchase tickets
        </a>
        <p className="voucher-fineprint">
          * this voucher includes approximately 3x kid free hours where James will spend the day with Sebastian in town (bottle of milk not included).
        </p>
      </div>
      <p className="voucher-sender">Love, Husband (aka Dad) xxx</p>
    </div>
  );
}

export default App;