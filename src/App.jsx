import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
// import  getStartOfWeek from "./components/common/utilities";
import {generateWeekRange, getStartOfWeek}  from "../src/components/common/utilities.js";
import  {monthsNames} from "./components/common/utilities";	
import {fetchTasksList, createEvent} from "../src/gateway/eventsGatway.js";


class App extends Component {

  state = {
    popupShown: false,
    monday: 0,
    today: new Date(),
    weekStart: generateWeekRange(getStartOfWeek(new Date())),
    events: []

  }
  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () =>
  fetchTasksList().then((eventsList) =>
    this.setState({
      events: eventsList
    })
  );

   onCreate = (newEvent)=> {
    this.setState({
          events: [...this.state.events, newEvent]
       })

    createEvent(newEvent).then(() => this.fetchTasksList());
 };



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
      
      return (
      <>
          <Header currMonth={this.setCurrMonth()}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.handleToday}
          onCreate={this.handlePopup} 
          />
          <Main weekStart={this.state.weekStart}
            week={this.state.monday}
            showPopup={this.handlePopup} 
           />
           {this.state.popupShown && (
               <Popup 
                   events={this.state.events}
                  fetchEvents={this.fetchEvents}
                  onAddEvent={this.onCreate}
                   closePop={this.closePop} />         
             )}
      </>)
  }
};
export default App;

