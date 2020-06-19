import React from 'react';

const Popup = ({closePop}) => {
    return (
      <div className="popup-layer">
      <form className="popup event"  >
        <span className="popup__btn-close" onClick={closePop} ><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
        <input className="event__name" name="eventName" type="text" placeholder="Add title " />
        {/* <div className="popup__color-picker">
          <label className="popup__color-picker_label">
          <span className="popup__color-picker_label-text">Select a color</span>
          <input className="event__color-picker" type="color" name="color" value="#4183f1"/>
          </label>
        </div> */}
        <div className="popup__picker">
          <img className="clock" src="https://img.icons8.com/pastel-glyph/64/000000/time.png"  alt="clock" />
          <input className="event__date-start input" name="startDate" required type="date"  />
          <input type="time" className="startTime_place input" name="startTimePlace" />
          <span className='line'></span>
          <input type="time" className="endTime_place input" name="endTimePlace"  />
        </div>
        <div className="centerData">
          <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
          <textarea type="text" className="multiline__text" placeholder="Add description" name="description" cols="30" rows="3"></textarea>
        </div>
        <div className="footer-popup">
        <button type="submit" className="btn_save">Save</button>
        </div>
      </form>
    </div>

    );
};

export default Popup;