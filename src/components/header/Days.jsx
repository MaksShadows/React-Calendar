import React from "react";
import  generateNumbers from "../utilities";
import  getStartOfWeek  from "../utilities";
import moment from "moment";

const Days = ({week}) => {
  let currentDay = getStartOfWeek(week);

  const weekDays = generateNumbers(0, 6).map(days => {
    const weekDays = moment()
      .startOf("isoWeek")
      .add(currentDay, "days");

      const markDay = weekDays.format("DD.MM.YY") ===  moment().format("DD.MM.YY")? "d day-week__current" : "day-week  ";


    currentDay++;

    return (
      <div key={days}  className="day-week">
        <div className={markDay}>{weekDays.format("DD")}</div>
       </div>
    );
  });

  return <div className="weeks">{weekDays}</div>;
};

export default Days;


