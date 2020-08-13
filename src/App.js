import React from 'react';
import './App.css';

import DemoSimple from './demo';

import logo from './img/logo.svg';
import linkdin from './img/linkdin.svg';
import github from './img/github.svg';
import mail from './img/Vectormail.svg';
import spotify from './img/Vectorspotify.svg';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <DemoSimple />

      <footer className="footer">
        <div className='media-grup'>
          <img className="media" src={linkdin} />
          <img className="media" src={github} />
          <img className="media" src={mail} />
          <img className="media" src={spotify} />
        </div>
      </footer>
    </div>
  );
}

export default App;
