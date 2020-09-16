import React from "react";
import Hour from "../main/Hour";
//import moment from 'moment';
//import  generateNumbers from "../common/utilities";




const Day = ({week, events}) => {
   //const hours = generateHours();

   let hours =[];
   for (let i = 0; i<24 ; i++) {
     hours.push(i + new Date([0]).getHours());
   } 

  return  (
   <div   className="column-day">
     {
       hours.map((hours) => {

        return ( 
          <Hour hours={hours} 
           key={Math.random()} />
            )
       })
     }
     
   </div>
  );

};

export default Day;
