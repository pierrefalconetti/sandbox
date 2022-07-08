import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyNewComponent from './xtrem-header';
import Popup from 'reactjs-popup';
import MyCard from './Card';
import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello World!</div>
        <MyCard content="Benjamin" email="benjamin.dean@sage.com" />
        <MyCard content="Pierre" email="pierre.falconetti@sage.com" />
        <Popup trigger={<button>Lorem Ipsum is here</button>} position="right center">
          <div>Popup content here!!</div>
        </Popup>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyCard content="Benjamin" email="benjamin.dean@sage.com"/>
        <MyCard content="Pierre"/>
        <MyCard content="Nicolas"/>
        <MyCard content="David"/>
        <MyNewComponent />
        <MyCard content="Christophe" />
        <MyCard content="Bence" />
      </header>

    </div>
  );
}

export default App;
