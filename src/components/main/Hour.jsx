import React from "react";
import  generateNumbers from "../common/utilities";
//import Event from "../Event";


const Hour = ({events}) => {
  return generateNumbers(0, 23).map((args) => (
    <div key={args} 
    events={events}
    className="column-item">
    </div>
  ));

};

export default Hour;