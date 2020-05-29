import React from 'react';
import Nav from './components/Nav/Nav';
import Masthead from './components/Masthead/Masthead';
import Grid from './components/Grid/Grid';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Masthead />
      <Grid />
    </div>
  );
}

export default App;
