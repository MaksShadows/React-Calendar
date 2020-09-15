import React from "react";
import Hour from "../main/Hour";
//import moment from 'moment';
//import  generateNumbers from "../common/utilities";




const Day = ({week, events}) => {
   const hours = Array(24).fill().map((index) => index);

   function filteredEvents() {
    let hour =[];
    for (let i = 0; i<24 ; i++) {
      hour.push(i + new Date([0]).getHours());
    } 
    return hour;
  }
console.log(filteredEvents());

  return  (
   <div   className="column-day">
     {
       hours.map(() =>{

        return ( 
          <Hour hour={filteredEvents} 

           key={Math.random()} />
            )
       })
     }
     
   </div>
  );

};

export default Day;
