import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="nav">I'm the nav. Woot.</nav>
      <div className="masthead">
        <h1 className="masthead__heading">I'm the Masthead.</h1>
      </div>
      <div className="grid">
        <p>I'm the grid.</p>
        <div className="card">
          <p>I'm a card. Huzzah.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
