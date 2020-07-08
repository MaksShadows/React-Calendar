import React from "react";
import Event from "../Event";
import  generateNumbers from "../common/utilities";


const ColumnTable = ({column, events, id }) => {


  const columnDay = generateNumbers(0, 6).map(arg => {

    return (
      <div   key={arg}   className="column-day">
         
        <>
          {column = generateNumbers(0, 23).map(item =>{ 
              return (
                <div key={item} id={id}  className="column-item">
                   <Event
                    key={Math.random()}
                    events={events}
                    title={events.title}
                    id={events.id}
                    date={events.date}
                    startTime={events.startTime}
                    endTime={events.endTime} /> 

                     {/* {events && (
                      <Event
                       events={events}
                       key={Math.random()}
                        id={events.id}
                       title={events.title}
                        date={events.date}
                       startTime={events.startTime}
                       endTime={events.endTime}
                        /> )}  */}
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
