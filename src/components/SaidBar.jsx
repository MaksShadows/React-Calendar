import React from "react";
import  generateNumbers from "./utilities";


const SaidBar = () => {
  return (
    <div className="saidbar">
    {generateNumbers(1, 24).map((timeItem) => (
      <div className="time-column__line" >
        {`${timeItem > 10 ? 0 + timeItem : 0 }:00`}
      </div>
    ))}
  </div>
  );
};

export default SaidBar;