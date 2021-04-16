import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from'react-router-dom';
import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';
import './App.css';
import './styles/Styles.scss'
import { State } from './state/State';
import { CONTENT } from './state/State';

// const store = ConfigureStore();

const App = () => {
  return (
    <State.Provider value={CONTENT}>
      <BrowserRouter>
          <Main />
      </BrowserRouter>
    </State.Provider>
  );
}

export default App;
