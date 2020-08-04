import React from "react";
import Hour from "../main/Hour";
import  generateNumbers from "../common/utilities";




const Day = ({events, id, monday}) => {


  return generateNumbers(0, 6).map((args) => (
    <div key={args}
        args={args} 
        monday={monday}
    className="column-day">
       {
        events.map((event) => {
          const filterEvents = events.filter(event => new Date(`${event.date} ${event.startTime}`).getHours());
          return (
            <Hour  event={event} events={filterEvents} />
          )
        })
      }
    
    </div>
  ));

  
};

export default Day;
