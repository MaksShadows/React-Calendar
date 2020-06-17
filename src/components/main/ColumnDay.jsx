import React from "react";
import  generateNumbers from "../utilities";
import ColumnSection from "./ColumnSection";


const ColumnDay = () => {
  const columnDay = generateNumbers(0, 6).map(arg => {
  
    return (
      <div key={arg} className="column-day">
        
        <ColumnSection />
      </div>
    );
  });

  return columnDay;
};

export default ColumnDay;
