import logo from '../../assets/images/logo.svg';
import './App.scss';
import React from 'react';
import MyNewComponent from '../XtremHeader/XtremHeader';
import Popup from 'reactjs-popup';
import MyCard from '../Card/Card';
import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div className="App">

      <header className="App-header grid-cols-responsive">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>YARS: Yet Another ReactJS Sandbox project</h1>
          <Popup trigger={<button>Click me!</button>} position="right center">
            <div>Popup hidden content here!!</div>
          </Popup>
        </div>
      </header>

      <div className="App-content grid-cols-responsive">
        <div className="grid-flex-wrap">
          <MyCard content="Benjamin" email="benjamin.dean@sage.com" />
          <MyCard content="Pierre" email="pierre.falconetti@sage.com" />
          <MyCard content="Nicolas" />
          <MyCard content="David" />
          <MyCard content="Christophe" />
          <MyCard content="Bence" />
          <MyCard content="Tartempion">
            <p>
              Here I can put my content of type "any".
              This is an example of TypeScript use.
              Yet another edit...
            </p>
            <MyNewComponent />
          </MyCard>
        </div>
      </div>

      <footer className="grid-cols-responsive">
        Edit <code>src/App.js</code> and save to reload
        &nbsp;|&nbsp;
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>

    </div>
  );
}

export default App;
