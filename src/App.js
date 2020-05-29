import React from 'react';
import Nav from './components/Nav/Nav';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
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
