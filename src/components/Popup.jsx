import React from 'react';

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
      [name]: value
    });
  };

  handleEventCreate = () => {
     this.props.onCreate(this.state.title); 
     this.setState({title: '' });
  };


  handleSubmit = event => {
    event.preventDefault();
     const formData = [...new FormData(this.formRef)].reduce(
          (acc, [name, value]) => ({ ...acc, [name]: value }),
          {}
       );
        this.props.onSubmit(formData);
  };

  setRef = (node) => {
    this.formRef = node;

  };


render() {
    const {closePop, title, dateStart,startTime,endTime, description}= this.props;
  return (
      <div className="popup-layer">
      <form className="popup event"   onSubmit={() => this.handleSubmit} >
        <span className="popup__btn-close" onClick={closePop} ><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
        <input className="event__name"
        value={title}
        onChange={this.handleChange}
        name="eventName" type="text"
         placeholder="Add title " />
        <div className="popup__picker">
          <img className="clock" src="https://img.icons8.com/pastel-glyph/64/000000/time.png"  alt="clock" />
          <input className="event__date-start input"
            onChange={this.handleChange} 
            name="startDate" required type="date" 
             value={dateStart} 
             />
          <input type="time"
           className="startTime_place input"
           name="startTimePlace"  
           onChange={this.handleChange} 
           value={startTime} 
           />
          <span className='line'></span>
          <input type="time"
           className="endTime_place input"
            name="endTimePlace" 
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
          onClick={() => this.handleEventCreate}
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