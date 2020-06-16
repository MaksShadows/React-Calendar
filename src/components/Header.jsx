import React from "react";


const Header =({onCreate,onToday, nextWeek, prewWeek }) => {
  return (
    <header className="header">
      <button className="header-create" onClick={onCreate}>
      <i className="fas fa-plus"></i>
        Create
        </button>
      <button className="header-today"
      onClick={onToday}
      >Today</button>
      <div className ="navigate__arows">
          <div className="navigate__arows_left" onClick={nextWeek}></div>
           <div className="navigate__arows_right" onClick={prewWeek}></div>
        </div>
  <div className="navigate__MonthAndYear"></div>
    </header>
        
  )
};

export default Header;
