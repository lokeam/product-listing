import React from 'react';
import './spinner-styles.scss';

const Spinner = () => {
  return (
    <div className="spinner__wrapper">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );
};

export default Spinner;
