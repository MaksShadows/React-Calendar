import React from "react";
import Hour from "../main/Hour";



const Day = ({ dataDay, dayEvents}) => {

  const hours = Array(24).fill();

  return  (
   <div   className="column-day" data-day={dataDay}>
     {
       hours.map(hour => {
         
           //getting all events from the day we will render
         const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return ( 
          <Hour 
          key={dataDay + hour}
          dataHour={hour}
          hourEvents={hourEvents}
          />
            )
       })
     }
     
   </div>
  );

};

export default Day;
