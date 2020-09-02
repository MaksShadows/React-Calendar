import React from "react";
import Hour from "../main/Hour";
//import  generateNumbers from "../common/utilities";




const Day = ({week}) => {
   const hours = Array(24).fill().map((val, index) => index);

  return  (
    <div  className="column-day">

       {
        hours.map(() => {
          const day = new Date()
          .filter(day => day.getDate() === day.getDay());
          
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
