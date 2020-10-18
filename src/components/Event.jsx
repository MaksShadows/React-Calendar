import React from 'react';


    const Event = ({height, marginTop, title, time, onDeleteEvent, id }) => {
   
    const eventStyle = {
        height,
        marginTop
    }


        return (
       <div style={eventStyle} className="active_event" >
            <div className="event__title">{title}</div>
           <div className="event__time">{time}</div>
           <div className="delete-event-btn"
          onClick={() => onDeleteEvent(id)}
           >
       <i className="Tiny material-icons material-icons-delete">delete</i>
       Delete
            </div>
       </div>
       )
   }
  
export default Event;