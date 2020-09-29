import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";




const Header =({onCreate,onToday, nextWeek, prevWeek, months}) => {
  const monthsEnd = moment(months).endOf('isoWeek');  


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
  <div className="navigate__MonthAndYear">{`${months.format('MMM')}-${monthsEnd.format('MMM YYYY')}`}</div>
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