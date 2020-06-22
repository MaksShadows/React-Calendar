import React from "react";
import  generateNumbers from "../utilities";
import ColumnSection from "./ColumnSection";


const ColumnDay = ({showPopup}) => {
  const columnDay = generateNumbers(0, 6).map(arg => {
  
    return (
      <div 
      key={arg} 
      className="column-day">
        <ColumnSection  
        showPopup={showPopup} />
      </div>
    );
  });

  return columnDay;
};

export default ColumnDay;
