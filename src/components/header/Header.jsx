import React from "react";
import Week from './Week';
import  getDisplayedMonth  from '../utilities'


const Header =({onCreate,onToday, nextWeek, prevWeek, date,  week }) => {
  const currentMonth = getDisplayedMonth(date);

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
        <div className="navigate__MonthAndYear">{currentMonth}</div>
      </div>
      <Week week={week} />
    </header>
  )
};

export default Header;
