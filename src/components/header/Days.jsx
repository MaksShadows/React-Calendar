import React from "react";
import  generateNumbers from "../utilities";
import  getStartOfWeek  from "../utilities";
import moment from "moment";

const Days = () => {
  let currentDay = getStartOfWeek();

  const weekDays = generateNumbers(0, 6).map(days => {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .add(currentDay, "day");

    currentDay++;

    return (
      <div key={days}  className="day-week">
        <div>{startOfWeek.format("DD")}</div>
       </div>
    );
  });

  return <div className="week">{weekDays}</div>;
};

export default Days;


