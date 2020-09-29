import React from 'react';
import {fetchTasksList, createEvent} from "../gateway/eventsGatway.js";
import PropTypes from 'prop-types';


class Popup extends React.Component {


  state={
    name: "",
    dateStart: "",
    dateTo: "",
    dateFrom: "",
    description: "",
  }




  handleChange = event => {
     const { name, value } = event.target;

     this.setState({
      [name]: value,

     });
  };




  handleSubmit = (event) => {
    event.preventDefault();

      const formElem = document.querySelector('.popup');

     const formData = Object.fromEntries(new FormData(formElem));

      const newObj = [...Object.entries(formData)];

      console.log(newObj);

    //this.props.createEvent();

    //cчитать форму в обьект +
    //сохранить обьект в массиве +

  }


render() {
    const {closePop }= this.props;
  return (
      <div className="popup-layer">
      <form className="popup event"  onSubmit={this.handleSubmit} >
        <span className="popup__btn-close" onClick={closePop} ><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
        <input className="event__name"
        value={this.state.name}
        onChange={this.handleChange}
        name="name" 
        type="text"
         placeholder="Add title " />
        <div className="popup__picker">
          <input className="event__date-start input"
            onChange={this.handleChange} 
            name="dateStart" required type="date" 
             value={this.state.dateStart} 
             />
          <input type="time"
           className="startTime_place input"
           name="dateFrom"  
           onChange={this.handleChange} 
           value={this.state.dateFrom} 
           />
          <span className='line'></span>
          <input type="time"
           className="endTime_place input"
            name="dateTo" 
            onChange={this.handleChange} 
            value={this.state.dateTo} 
            />
        </div>
        <div className="centerData">
          <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
          <textarea type="text" 
          className="multiline__text" 
          onChange={this.handleChange}
          value={ this.state.description} 
          placeholder="Add description"
           name="description" cols="30" rows="3"></textarea>
        </div>
        <div className="footer-popup">
        <button 
        type="submit"
         onClick={() => createEvent(this.state)
          .then(fetchTasksList())
          .then(this.props.closePop)
        }
          className="btn_save">Save</button>
           {/* <button className="delete-event ">
             <i className="Tiny material-icons material-icons-delete">delete</i>
          </button>  */}
        </div>
      </form>
    </div>
  )
}
};

export default Popup;

Popup.propTypes = {
  closePop: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};