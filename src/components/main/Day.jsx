import React from "react";
import Hour from "../main/Hour";
//import  generateNumbers from "../common/utilities";




const Day = ({week}) => {
   const hours = Array(24).fill().map((val, index) => index);

  return  (
    <div  className="column-day">

       {
        hours.map(hours => {
          const day = new Date()
          .filter(day => new Date().getDay(day));
          
          //const currentDay = events.find(hours => hours.getDate() === currentDate.getDate());
          return (
        <Hour hours={hours} week={week} filter={day} key={Math.random()} />
          )
        })
      }
    
    </div>
  );

};

export default Day;
