import React from "react";
import  generateNumbers from "../utilities";

const ColumnSection = ({showPopup}) => {
  const BlockHour = generateNumbers(0, 23).map(arg => {
    
    return (
      <div
      showPopup={showPopup} 
        key={arg}
        className="column-item" >
      </div>
    );
  });
  return BlockHour;
};

export default ColumnSection;
