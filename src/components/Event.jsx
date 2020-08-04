import React from 'react';


 const Event = (props) => {
    const { title, date, description, startTime, endTime } = props;

        return (
       <div key={Math.random()} className="active_event" >
           <span>{title}</span>
           <span>{`${date} ${startTime} - ${endTime}`}</span>
           <span>{description}</span>
       </div>
       )
   }
  
export default Event;