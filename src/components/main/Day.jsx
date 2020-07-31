import React from "react";
import Hour from "../main/Hour";
import Event from "../Event";
import  generateNumbers from "../common/utilities";
import   generateWeekRange from "../common/utilities";



const Day = ({events, id, monday}) => {

    const day = generateWeekRange(monday)
   events.filter((event) => {
    return (
      new Date(day).getDate() === new Date(event.date).getDate() 
    );
  });

  return generateNumbers(0, 6).map((args) => (
    <div key={args}
        args={args} 
        monday={monday}
    className="column-day">
      <Hour  events={events} />
      {/* {
        events.map((event) =>(
          <Event key={event.id} event={event}  />

        ))
      } */}
         {events.map(event => id === (event.date) && (
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
  ));

  
};

export default Day;
