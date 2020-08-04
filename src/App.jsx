import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/Popup';
import Main from "./components/main/Main";
import  getStartOfWeek  from "./components/common/utilities";
import {createTask,fetchTasksList, deleteEvent} from "./eventsGatway";



class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          id: 1,
          title: 'One',
          date: "",
          startTime: '',
          endTime: '',
          description: 'first',
      },

      ],
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

onCreateEvent   = (taskData) => {
  createTask(taskData)
      .then(fetchTasksList()
          .then(result => {
              this.setState({
                  events: result,
              })
          })
      )
}




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
            events={this.state.events}
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
                       onSave={this.state.onCreateEvent}
                      //  onAddEvent={this.createNewEvent}
                      closePop={this.closePop} />         
             )}
          </>
      );
  };
};
export default App;
