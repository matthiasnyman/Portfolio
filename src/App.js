import React from 'react';
import './App.css';

import DemoSimple from './demo';

import linkdin from './img/linkdin.svg';
import github from './img/github.svg';
import mail from './img/Vectormail.svg';
import spotify from './img/Vectorspotify.svg';

function App() {
  return (
    <div className="App">
      <DemoSimple />

      <footer className="footer">
        <div className='media-grup'>
          <img className="media" alt="linkedin" src={linkdin} />
          <img className="media" alt="Github" src={github} />
          <img className="media" alt="mail" src={mail} />
          <img className="media" alt="Spotify" src={spotify} />
        </div>
      </footer>
    </div>
  );
}

export default App;
