import React from 'react';
import logo from '../../static/imgs/mm-header-logo.svg';
import './nav-styles.scss';


function Nav() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt=""/>
    </nav>
  );
}

export default Nav;
