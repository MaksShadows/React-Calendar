import React, { Component } from "react";
import PropTypes from 'prop-types';


class Popup extends Component {


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     newEvent: {
  //       name: "",
  //       dateStart: "",
  //       dateTo: "",
  //       dateFrom: "",
  //       description: "",
  //     }
  //   };
  // }


  // handleChange = event => {
  //   let { name, value } = event.target;
  //   this.setState({
  //     newEvent: {
  //       ...this.state.newEvent,
  //       [name]: value
  //     }
  //   });
  // };


  handleSubmit = (event) => {


    event.preventDefault();

    const formElem = document.querySelector('.popup');

    const formData = Object.fromEntries(new FormData(formElem));

    const newObj = [...Object.entries(formData)];


    this.props.onSave();
    this.props.closePop();

    console.log(newObj);


    //cчитать форму в обьект +
    //сохранить обьект в массиве +

  }


  render() {
    const { closePop, newEvent, handleChange } = this.props;
    return (
      <div className="popup-layer">
        <form className="popup event" onSubmit={this.handleSubmit} >
          <span className="popup__btn-close" onClick={closePop} ><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
          <input className="event__name"
            value={newEvent.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Add title " />
          <div className="popup__picker">
            <input className="event__date-start input"
              onChange={handleChange}
              name="dateStart" required type="date"
              value={newEvent.dateStart}
            />
            <input type="time"
              className="startTime_place input"
              name="dateFrom"
              onChange={handleChange}
              value={newEvent.dateFrom}
            />
            <span className='line'></span>
            <input type="time"
              className="endTime_place input"
              name="dateTo"
              onChange={handleChange}
              value={newEvent.dateTo}
            />
          </div>
          <div className="centerData">
            <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
            <textarea type="text"
              className="multiline__text"
              onChange={handleChange}
              value={newEvent.description}
              placeholder="Add description"
              name="description" cols="30" rows="3"></textarea>
          </div>
          <div className="footer-popup">
            <button
              type="submit"
              //onClick={() => this.props.onSave}
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
