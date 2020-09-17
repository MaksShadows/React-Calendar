import React from "react";
import  {generateNumbers} from "../src/common/utilities" ;


const SaidBar = () => {
  const timesBlock = generateNumbers(1, 23).map(timeItem => {

    return (
      <div key={timeItem} className="time__scile-hour">
        {`${ timeItem  <= 10 ?
         `${timeItem}:00` :
         `${timeItem}:00`}`}
      </div>
    );
  });
  return <div className="time__scile">{timesBlock}</div>;
};

export default SaidBar;


