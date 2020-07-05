import React from "react";
import Event from "../Event";
import  generateNumbers from "../common/utilities";


const ColumnTable = ({column, event, id }) => {
  const columnDay = generateNumbers(0, 6).map(arg => {

    return (
      <div   key={arg}  className="column-day">
        <>
          {column = generateNumbers(0, 23).map(item =>{ 
              return (
                <div key={item} id={id}  className="column-item">
                     {event && (
                      <Event
                       event={event}
                       id={event.id} /> )}
                </div>
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
