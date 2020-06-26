import React from "react";
import  generateNumbers from "../utilities";


const ColumnTable = ({column}) => {
  const columnDay = generateNumbers(0, 6).map(arg => {

    return (
      <div   key={arg}  className="column-day">
        <>
          {column = generateNumbers(0, 23).map(item =>{ 
              return (
                <div key={item} className="column-item" ></div>
              );
           }
          )
          }
        </>
      </div>
    );
  });

  return columnDay;
};

export default ColumnTable;
