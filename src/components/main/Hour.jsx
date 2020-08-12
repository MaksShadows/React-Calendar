import React from "react";
import  generateNumbers from "../common/utilities";
import Event from "../Event";


const Hour = ({events}) => {


  return generateNumbers(0, 23).map((args) => (
    <div key={args} 
    args={ args  <= 10 ?
      `${args}:00` :
      `${args}:00`}
    className="column-item">
        {/* {
        events.map((event) => {
         return <Event key={Math.random()} event={event}/>
        })
       }   */}
          {events && <Event  key={Math.random()}  />}  
    </div>
  ));

};

export default Hour;