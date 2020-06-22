import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
import moment from "moment";
//import  getStartOfWeek  from "./components/utilities";



class App extends Component {

constructor() {
    super();
    this.state = {
      popupShown: false,
      monday : moment().startOf("isoWeek"),
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

     popupSwitcher = () => {
      const { popupShown } = this.state;
      this.setState({ popupShown: !popupShown });
    };
  

     nextWeek = () => {
      this.setState({
        monday:  moment(this.state.firstMonday).add(7, "days")
      });
    };
  
    prevWeek = () => {
      this.setState({
        monday:  moment(this.state.firstMonday).subtract(7, "days")
      })
    };


  render() {
      return (
          <>
            <Header
            week={this.state.monday}
            nextWeek={this.state.nextWeek}
            prevWeek={this.state.prevWeek}
            onCreate={this.handlePopup} />
            <Main
            showPopup={this.handlePopup}
             onCreate={this.handlePopup}  />
             {this.state.popupShown && (
                    <Popup 
                    
                      closePop={this.closePop} />         
             )}
          </>
      );
  };
};
export default App;
