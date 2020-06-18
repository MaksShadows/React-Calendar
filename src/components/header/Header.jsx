import React from "react";
import WeekDays from "./WeekDays";
import  getDisplayedMonth  from '../utilities'


const Header =({onCreate,onToday, nextWeek, prewWeek, month }) => {
  return (
    <header className="header">
       <div className="navigation">
       <button className="navigation-create" onClick={onCreate}>
      <i className="fas fa-plus"></i>Create </button>
      <button className="navigation-today"onClick={onToday} >Today</button>
       <div className ="navigate__arows">
          <div className="navigate__arows_left" onClick={nextWeek}></div>
           <div className="navigate__arows_right"onClick={prewWeek}></div>
        </div>
        <div className="navigate__MonthAndYear">{getDisplayedMonth(month)}</div>
      </div>
      <WeekDays />
    </header>
        
  )
};

export default Header;