import React from "react";
import  generateNumbers from "../utilities";
import  getStartOfWeek  from "../utilities";
import moment from "moment";

const Days = ({week}) => {
  let currentDay = getStartOfWeek(week);

  const weekDays = generateNumbers(0, 6).map(days => {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .add(currentDay, "days");

      let markDay    
       if (moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")) {
         markDay = "day-week  day-week__current"
       }

    currentDay++;

    return (
      <div key={days}  className="day-week">
        <div className={markDay}>{startOfWeek.format("DD")}</div>
       </div>
    );
  });

  return <div className="weeks">{weekDays}</div>;
};

export default Days;


