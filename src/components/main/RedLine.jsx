import React from "react";
import moment from 'moment';


const RedLine = () => {

  const timeHour = moment().hour()
  const timeMin = moment().minute()
  
  const style = {
    }
  return (
    <div style={style} className="redLine">
     
    </div>)
  
};

export default RedLine;