import React from "react";
import Event from "../Event";
import  generateNumbers from "../common/utilities";



const ColumnTable = ({column, events, id}) => {

  const columnDay = generateNumbers(0, 6).map(arg => {


    
    return (
      <div   key={arg} 
      event={events}
       className="column-day">
        {column = generateNumbers(0, 23).map(item =>(
              <div key={item}  
              id={id}  
              data-time={item}
              className="column-item">
                {events.map(event =>   (
                  <Event 
                  key={Math.random()}
                  events={events}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  startDate={event.startDate}
                  startTime={event.startTime}
                  />
                )
                )}
              </div>
        )
        )
        }

      </div>
    );
  });

  return columnDay;
};

export default ColumnTable;
