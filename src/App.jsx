import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
import  getStartOfWeek  from "./components/utilities";



class App extends Component {

constructor() {
    super();
    this.state = {
      popupShown: false,
      monday: getStartOfWeek(new Date()),
    };
  }

    handlePopup = () => {
       this.setState({
       popupShown: true,
     });
     };

      closePop = () => {
       this.setState({
       popupShown: false,
     });
     };

     nextWeek = () => {
      this.setState({
        monday: this.state.monday - 7
      });
    };
  
    prevWeek = () => {
      this.setState({
        monday: this.state.monday + 7
      });
    };

    handleToday = () => {
      this.setState({
        monday: 0
      });  
    };


  render() {
      return (
          <>
            <Header
            week={this.state.monday}
            nextWeek={this.nextWeek}
            prevWeek={this.prevWeek}
            onToday={this.handleToday}
            onCreate={this.handlePopup} />
            <Main
            showPopup={this.handlePopup}  />
             {this.state.popupShown && (
                    <Popup 
                      closePop={this.closePop} />         
             )}
          </>
      );
  };
};
export default App;
