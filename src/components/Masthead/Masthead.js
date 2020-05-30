import React from 'react';
import './masthead-styles.scss';

function Masthead() {
  return (
    <div className="masthead gray-bg">
      <h1 className="masthead__heading">Welcome to the Marketplace</h1>
      <span className="masthead__heading-underline gold-bg"></span>
      <p>Please select a product for your box!</p>
    </div>
 );
}

export default Masthead;
