import React from "react";
import WeekDays from "./WeekDays";
import Days from './Days';
import  getDisplayedMonth  from '../utilities'


const Header =({onCreate,onToday, nextWeek, prevWeek, month, week }) => {
  return (
    <header className="header">
       <div className="navigation">
       <button className="navigation-create" onClick={onCreate}>
      <i className="fas fa-plus"></i>Create </button>
      <button className="navigation-today"onClick={onToday} >Today</button>
       <div className ="navigate__arows">
          <div className="navigate__arows_left" onClick={nextWeek}></div>
           <div className="navigate__arows_right"onClick={prevWeek}></div>
        </div>
        <div className="navigate__MonthAndYear">{getDisplayedMonth(month)}</div>
      </div>
      <WeekDays  />
      <Days week={week} />
    </header>
  )
};

export default Header;
