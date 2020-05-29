import React from 'react';
import Nav from './components/Nav/Nav';
import Masthead from './components/Masthead/Masthead';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Masthead />
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
