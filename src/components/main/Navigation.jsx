import React from "react";
import  generateNumbers from "../common/utilities";
import moment from "moment";


const Navigation  = ({week}) => {
  let currentDay = week;

  const weekDays = generateNumbers(0, 6).map(day => {

    const week = moment()
      .startOf("isoWeek")
      .add(currentDay, "days");

      const markDay = week.format("DD.MM.YY") ===  moment().format("DD.MM.YY")? "day-week__current" : "day-week  ";

    currentDay++;

    return (
      <div key={day}   className="day-week">
         <div className="week-days">{week.format("ddd")}</div>
        <div className={markDay}>{week.format("DD")}</div>
       </div>
    );
  });

  return (
    <div className="week">{weekDays}</div>
    
  )

  
};

export default Navigation ;


