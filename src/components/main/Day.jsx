import React from "react";
import Hour from "../main/Hour";
//import Event from "../Event";
import  generateNumbers from "../common/utilities";



const Day = ({events, id, monday}) => {

  return generateNumbers(0, 6).map((args) => (
    <div key={args}
        args={args}
    className="column-day">
      
      <Hour  events={events} />
      {/* {
        events.map((event) =>(
          <Event key={event.id} event={event}  />

        ))
      } */}
        {/* {events.map(event => id === (event.date) && (
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
                )} */}
    </div>
  ));

  
};

export default Day;
