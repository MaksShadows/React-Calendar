import React from "react";
import  generateNumbers from "../utilities";

const SaidBar = () => {
  const timesBlock = generateNumbers(1, 23).map(timeItem => {

    return (
      <div key={timeItem} className="time__day-hour">
        {`${ timeItem  <= 10 ?
         `${timeItem}:00` :
         `${timeItem}:00`}`}
      </div>
    );
  });
  return <div className="time__day">{timesBlock}</div>;
};

export default SaidBar;
