import React from "react";
import Hour from "../main/Hour";
//import moment from 'moment';
//import  generateNumbers from "../common/utilities";




const Day = ({week, events}) => {
   const hours = Array(24).fill().map((index) => index);

  return  (
   <div   className="column-day">
     {
       hours.map((hour) =>{
        // const day = new Date(week);
        // const filteredEvents = events.filter((event) => {
        //   return day === new Date(event.day).getDay()  ;
  
        return (
          <Hour hou={hour} 
          //filteredEvents={filteredEvents}  
           key={Math.random()} />
            )
       })
     }
     
   </div>
  );

};

export default Day;
