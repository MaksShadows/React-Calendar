import React from "react";
import Hour from "../main/Hour";
//import  generateNumbers from "../common/utilities";




const Day = () => {
   const hours = Array(24).fill().map((val, index) => index);

  return  (
    <div  className="column-day">

       {
        hours.map(() => {
          const hours = new Date();
          //const currentDay = events.find(hours => hours.getDate() === currentDate.getDate());
          const filterEvents = hours.filter(hours =>hours.getDate() === hours.getHours());
          return (
        <Hour hours={hours} filter={filterEvents}  key={Math.random()} />
          )
        })
      }
    
    </div>
  );

};

export default Day;
