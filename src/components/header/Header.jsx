import React from "react";
import PropTypes from 'prop-types';




const Header =({onCreate,onToday, nextWeek, prevWeek,  currMonth}) => {
  // const currenMonth = getDisplayedMonth(monday);


  return (
    <header className="header" >
       <div className="navigation">
       <button className="navigation-create" onClick={onCreate}>
      <i className="fas fa-plus"></i>Create </button>
      <button className="navigation-today"onClick={onToday} >Today</button>
       <div className ="navigate__arows">
          <div className="navigate__arows_left" onClick={nextWeek}></div>
           <div className="navigate__arows_right"onClick={prevWeek}></div>
        </div>
        <div className="navigate__MonthAndYear">{currMonth}</div>
      </div>
    </header>
  )
};

export default Header;

Header.propTypes = {
  onCreate: PropTypes.func,
  onToday: PropTypes.func,
  nextWeek: PropTypes.func,
  prevWeek: PropTypes.func
};