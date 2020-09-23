import React from 'react';
import {fetchTasksList,
  //createEvent
} from "../gateway/eventsGatway.js";


class Popup extends React.Component {

  state = {
    title: "",
    dateStart: "",
    startTime: "",
    endTime: "",
    description: "",
  };



  handleChange = event => {
     const { name, value } = event.target;

     this.setState({
      [name]: value,

     });
  };

  // handleEventCreate = event => {
  //  event.preventDefault();

  //  this.props.handleCreateEvent(this.state)
  // };


  handleSubmit = event => {
    console.log(this.formData);

    event.preventDefault();
     const formData = [...new FormData(this.formRef)].reduce(
          (acc, [name, value]) => ({ ...acc, [name]: value }),
          {}
       );
        this.props.onSubmit(formData);
  };


render() {
    const {closePop, title, dateStart,startTime,endTime, description, 
      onCreate
    }= this.props;
  return (
      <div className="popup-layer">
      <form className="popup event"   onSubmit={() => this.handleSubmit} >
        <span className="popup__btn-close" onClick={closePop} ><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
        <input className="event__name"
        value={title}
        onChange={this.handleChange}
        name="title" 
        type="text"
         placeholder="Add title " />
        <div className="popup__picker">
          <input className="event__date-start input"
            onChange={this.handleChange} 
            name="startDate" required type="date" 
             value={dateStart} 
             />
          <input type="time"
           className="startTime_place input"
           name="startTime"  
           onChange={this.handleChange} 
           value={startTime} 
           />
          <span className='line'></span>
          <input type="time"
           className="endTime_place input"
            name="endTime" 
            onChange={this.handleChange} 
            value={endTime}
            />
        </div>
        <div className="centerData">
          <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
          <textarea type="text" 
          className="multiline__text" 
          onChange={this.handleChange}
          value={description}
          placeholder="Add description"
           name="description" cols="30" rows="3"></textarea>
        </div>
        <div className="footer-popup">
        <button type="submit"
          onClick={() => onCreate(this.state).then(fetchTasksList())}
          className="btn_save">Save</button>
           <button className="delete-event ">
             <i className="Tiny material-icons material-icons-delete">delete</i>
          </button> 
        </div>
      </form>
    </div>
  )
}
};

export default Popup;