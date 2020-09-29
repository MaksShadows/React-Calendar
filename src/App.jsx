import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
import moment from "moment";
import {generateWeekRange, getStartOfWeek}  from "../src/components/common/utilities.js";
import {fetchTasksList,
//createEvent
} from "../src/gateway/eventsGatway.js";


class App extends Component {

  state = {
    popupShown: false,
    monday: 0,
    months:  moment().startOf("isoWeek"),
    weekStart: generateWeekRange(getStartOfWeek(new Date())),
    events: [],
    
  }

  componentDidMount() {
    this.fetchEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.events === this.state.events) this.fetchEvents();
  }

 
  fetchEvents = () =>
  fetchTasksList().then(events =>
    this.setState({
      events,
    })
  );

  
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
      monday: this.state.monday + 7 ,
      months:  moment(this.state.months).add(7, "days")

    });
  };

  prevWeek = () => {
    this.setState({
      monday: this.state.monday - 7,
      months:  moment(this.state.months).subtract(7, "days")

    });
  };

  handleToday = () => {
    this.setState({
      monday: 0,
      months: moment().startOf("isoWeek")

    });  
  };

 

  render() {
      
      return (
      <>
          <Header months={this.state.months}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.handleToday}
          onCreate={this.handlePopup} 
          />
          <Main weekStart={this.state.weekStart}
            week={this.state.monday}
            showPopup={this.handlePopup} 
            events={this.state.events}

           />
           {this.state.popupShown && (
               <Popup 
                  events={this.state.events}
                  // onCreateEvent={this.onCreateEvent}
                   closePop={this.closePop}
                
                    />         
             )}
      </>)
  }
};
export default App;

