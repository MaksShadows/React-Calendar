import React from "react";
import  generateNumbers from "../common/utilities";
import  Day from "./Day";
import moment from "moment";


const Week = ({week}) => {
  let currentDay = week;

  const weekDays = generateNumbers(0, 6).map(days => {

    const week = moment()
      .startOf("isoWeek")
      .add(currentDay, "days");

      const markDay = week.format("DD.MM.YY") ===  moment().format("DD.MM.YY")? "day-week__current" : "day-week  ";


    currentDay++;

    return (
      <div key={days}  className="day-week">
         <div className="week-days">{week.format("ddd")}</div>
        <div className={markDay}>{week.format("DD")}</div>
        <Day key={days} />
       </div>
    );
  });

  return (
    <div className="week">{weekDays}</div>
    
  )

  
};

export default Week;


