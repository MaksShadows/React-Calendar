import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
import  getStartOfWeek from "./components/common/utilities";
import  generateWeekRange  from "./components/common/utilities";
import  {monthsNames} from "./components/common/utilities";	
//import {createTask,fetchTasksList, deleteEvent} from "./eventsGatway";


class App extends Component {

  state = {
    popupShown: false,
    monday: getStartOfWeek(new Date()),
    today: new Date(),
    weeksDay: new Date(),
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

  setCurrMonth = () => {
    let currMonth =monthsNames[this.state.today.getMonth()];
    return `${currMonth} ${this.state.today.getFullYear()}`;
  };
   nextWeek = () => {
    this.setState({
      monday: this.state.monday - 7,
    });
  };

  prevWeek = () => {
    this.setState({
      monday: this.state.monday + 7,
    });
  };

  handleToday = () => {
    this.setState({
      monday: 0
    });  
  };

  render() {
      const { weeksDay } = this.state;
      const weekStart = generateWeekRange(getStartOfWeek(weeksDay));

      return (
      <>
          <Header currMonth={this.setCurrMonth()}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.handleToday}
          onCreate={this.handlePopup} 
          />
          <Main weekStart={weekStart}
            week={this.state.monday}
            showPopup={this.handlePopup} 
           />
           {this.state.popupShown && (
               <Popup 
                   events={this.state.events}
                   onSave={this.state.onCreateEvent}
                      //  onAddEvent={this.createNewEvent}
                   closePop={this.closePop} />         
             )}
      </>)
  }
};
export default App;

