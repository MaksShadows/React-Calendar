import React from "react";
import  generateNumbers from "../common/utilities";
import Event from "../Event";


const Hour = ({events}) => {
  return generateNumbers(0, 23).map((args) => (
    <div key={args} 
    args={ args  <= 10 ?
      `${args}:00` :
      `${args}:00`}
   // events={events}
    className="column-item">
       {events && <Event events={events} />}
    </div>
  ));

};

export default Hour;