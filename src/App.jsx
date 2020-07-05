import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
import  getStartOfWeek  from "./components/common/utilities";
import {createTask,fetchTasksList, deleteEvent} from "./eventsGatway";



class App extends Component {

constructor() {
    super();
    this.state = {
      events:[],
      popupShown: false,
      monday: getStartOfWeek(new Date()),
    };
  }

  componentDidMount() {
    this.fetchTasks();
}


fetchTasks = () => {
    fetchTasksList().then(eventsList =>
        this.setState({
            events: eventsList,
        }),
    );
};

  onCreate = (newEvent) => {
  const newTask = {
      newEvent
  };
    this.setState({
       events: [this.state.newEvent]
    })

  createTask(newTask).then(() => this.fetchTasks());
};

handleEventDelete = (id) => {
  deleteEvent(id).then(() => this.fetchTasks());
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
            monday={this.state.monday}
            nextWeek={this.nextWeek}
            prevWeek={this.prevWeek}
            onToday={this.handleToday}
            onCreate={this.handlePopup} />
            <Main
            showPopup={this.handlePopup} 
            events={this.state.events}
            />
             {this.state.popupShown && (
                    <Popup 
                       events={this.state.events}
                       onSave={this.state.onCreate}
                       onAddEvent={this.createNewEvent}
                      closePop={this.closePop} />         
             )}
          </>
      );
  };
};
export default App;
