import React from "react";
import Hour from "../main/Hour";
//import moment from 'moment';
//import  generateNumbers from "../common/utilities";




const Day = ({ dataDay}) => {

  const hours = Array(24).fill();

  //  //const hours = generateHours();

  //  let hours =[];
  //  for (let i = 0; i<24 ; i++) {
  //    hours.push(i + new Date([0]).getHours());
  //  } 

  return  (
   <div   className="column-day" data-day={dataDay}>
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
