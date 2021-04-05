import React, { Component } from "react";
import PropTypes from 'prop-types';


class Popup extends Component {


  constructor() {
    super();
    this.state = {
      title: "",
      dateStart: "",
      dateTo: "",
      dateFrom: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })

  };

  handleTaskCreate = () => {
    this.props.closePop();
    this.props.onSave({
      title: this.state.title,
      dateStart: this.state.dateStart,
      dateTo: new Date(`${this.state.dateStart}T${this.state.dateTo}`),
      dateFrom: new Date(`${this.state.dateStart}T${this.state.dateFrom}`),
      description: this.state.description
    });
  };

  // handleSubmit = (event) => {


  //   event.preventDefault();

  //   const formElem = document.querySelector('.popup');

  //   const formData = Object.fromEntries(new FormData(formElem));

  //   const newObj = [...Object.entries(formData)];


  //   this.props.onSave();
  //   this.props.closePop();

  //   console.log(newObj);


  //   //cчитать форму в обьект +
  //   //сохранить обьект в массиве +

  // }


  render() {
    const
      { closePop,
        //newEvent, 
        //handleChange,
        handleSubmit
      } = this.props;
    return (
      <div className="popup-layer">
        <form className="popup event"
          onSubmit={handleSubmit}          >
          <span className="popup__btn-close" onClick={closePop} ><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
          <input className="event__name"
            value={this.state.value}
            onChange={this.handleChange}
            name="title"
            type="text"
            placeholder="Add title " />
          <div className="popup__picker">
            <input className="event__date-start input"
              onChange={this.handleChange}
              name="dateStart" required type="date"
              value={this.state.value}
            />
            <input type="time"
              className="startTime_place input"
              name="dateFrom"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <span className='line'></span>
            <input type="time"
              className="endTime_place input"
              name="dateTo"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
          <div className="centerData">
            <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
            <textarea type="text"
              className="multiline__text"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Add description"
              name="description" cols="30" rows="3"></textarea>
          </div>
          <div className="footer-popup">
            <button
              type="button"
              onClick={this.handleTaskCreate}
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
