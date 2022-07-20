import logo from './logo.svg';
import './App.scss';
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
        <Popup trigger={<button>Lorem Ipsum is here</button>} position="right center">
          <div>Popup content here!!</div>
        </Popup>
      </header>

      <div className="App-content">
        <MyCard content="Benjamin" email="benjamin.dean@sage.com" />
        <MyCard content="Pierre" email="pierre.falconetti@sage.com" />
        <MyCard content="Nicolas"/>
        <MyCard content="David"/>
        <MyCard content="Christophe" />
        <MyCard content="Bence" />

        <MyCard content="Tartempion">
          <p>Ici, je peux mettre tout le contenu de type "any".</p>
          <MyNewComponent />
        </MyCard>
      </div>

      <footer>
        NB: Edit <code>src/App.js</code> and save to reload.
        <br/>
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
