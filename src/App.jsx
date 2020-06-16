import React, { Component } from 'react';
import Header from './components/Header';
import Popup from './components/Popup';
import Main from "./components/Main";



class App extends Component {

  state = {
      
  };


  render() {
      return (
          <>
            <Header />
            <Main />
            <Popup />
          </>
      );
  };
};
export default App;
