import React from 'react';
import logo from './logo.svg';
import './App.css';

import DemoSimple from './demo';

function App() {


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <DemoSimple />

      <footer className="footer">
        <h3>Footer</h3>
      </footer>
    </div>
  );
}

export default App;
