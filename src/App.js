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
        <div className="media-grup">
          <a href="https://www.linkedin.com/in/matthias-nyman/" target="_blanc">
            <img className="media" alt="linkedin" src={linkdin} />
          </a>
          <a href="https://github.com/matthiasnyman" target="_blanc">
            <img className="media" alt="Github" src={github} />
          </a>
          <a href="mailto: matthias1994.mn@gmail.com" target="_blanc">
            <img className="media" alt="mail" src={mail} />
          </a>
          <a href="https://open.spotify.com/playlist/0WOPeoj18t3mXDd6CGmqVR?si=WCfO4Pg-RxKnN_MkT6h1Sw" target="_blanc">
            <img className="media" alt="Spotify" src={spotify} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
