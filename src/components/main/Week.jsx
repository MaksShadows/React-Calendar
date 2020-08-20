import React from "react";
import  generateNumbers from "../common/utilities";
import moment from "moment";


const Week = ({week}) => {
  let currentDay = week;

  const weekDays = generateNumbers(0, 6).map(days => {

    const weekDays = moment()
      .startOf("isoWeek")
      .add(currentDay, "days");

      const markDay = weekDays.format("DD.MM.YY") ===  moment().format("DD.MM.YY")? "day-week__current" : "day-week  ";


    currentDay++;

    return (
      <div key={days}  className="day-week">
        <div className="week-days">{weekDays.format("ddd")}</div>
        <div className={markDay}>{weekDays.format("DD")}</div>
       </div>
    );
  });

  return <div className="week">{weekDays}</div>;
};

export default Week;


