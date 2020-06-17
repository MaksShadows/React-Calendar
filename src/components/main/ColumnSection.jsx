import React from "react";
import  generateNumbers from "../utilities";

const ColumnSection = () => {
  const BlockHour = generateNumbers(0, 23).map(arg => {
    
    return (
      <div
        key={arg}
        className="column-item" >
      </div>
    );
  });
  return BlockHour;
};

export default ColumnSection;
