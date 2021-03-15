import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from'react-router-dom';
import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';
import './App.css';

// const store = ConfigureStore();

const App = () => {
  return (
      <BrowserRouter>
          <>
              <Main />
          </>
      </BrowserRouter>
  );
}

export default App;
