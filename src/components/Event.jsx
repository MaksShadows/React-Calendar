import React from 'react';


 const Event = ({height, marginTop, title, time}) => {
   
    const eventStyle = {
        height,
        marginTop
    }


        return (
       <div style={eventStyle} className="active_event" >
            <div className="event__title">{title}</div>
           <div className="event__time">{time}</div>
           <div className="delete-event-btn">
            Delete
            </div>
       </div>
       )
   }
  
export default Event;