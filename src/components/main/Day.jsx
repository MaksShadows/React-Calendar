import React from "react";
import Hour from "../main/Hour";
//import  generateNumbers from "../common/utilities";




const Day = ({events}) => {
   const hours = Array(24).fill().map((val, index) => index);

  return  (
    <div  className="column-day">

       {
        hours.map((event,) => {
          const currentDate = new Date();
        //  const currentDay = events.find(hours => hours.getDate() === currentDate.getDate());
         // const filterEvents = events.filter(event => new Date(`${event.date} ${event.startTime}`).getHours());
          return (
        <Hour  event={event}  currentDate={currentDate}  key={Math.random()} />
          )
        })
      }
    
    </div>
  );

};

export default Day;
