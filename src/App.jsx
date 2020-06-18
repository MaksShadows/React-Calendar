import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";



class App extends Component {

constructor() {
    super();
    this.state = {
      popupShown: false,
    };
  }

    handlePopup = () => {
       this.setState({
       popupShown: !this.state.popupShown,
     });
     };


  render() {
      return (
          <>
            <Header/>
            <Main />
             {this.state.popupShown && (
                    <Popup />
                )}
          </>
      );
  };
};
export default App;
