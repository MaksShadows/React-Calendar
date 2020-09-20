import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";




const Header =({onCreate,onToday, nextWeek, prevWeek, months}) => {
  const currenMonth = moment(months).format('MMMM') === moment(months).add("month").format('MMMM');


  return (
    <header className="header" >
       <div className="navigation">
       <button className="navigation-create" onClick={onCreate}>
      <i className="fas fa-plus"></i>Create </button>
      <button className="navigation-today"onClick={onToday} >Today</button>
       <div className ="navigate__arows">
          <div className="navigate__arows_left" onClick={prevWeek}></div>
           <div className="navigate__arows_right"onClick={nextWeek}></div>
        </div>
  <div className="navigate__MonthAndYear">{months.format("MMMM")}{currenMonth}</div>
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