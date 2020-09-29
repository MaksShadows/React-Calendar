import React from "react";
import Hour from "../main/Hour";
import PropTypes from 'prop-types';



const Day = ({ dataDay, dayEvents, dayStart, events}) => {
  const hours = Array(24).fill().map((val, index) => index);

  return (
      <div className="column-day" data-day={dataDay}>
          {hours.map(hour => {
              //getting all events from the day we will render
              const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

              return (
                  <Hour
                      key={dataDay + hour}
                      dataHour={hour}
                      hour={hour}
                      events={events}
                      dayStart={dayStart}
                      hourEvents={hourEvents}
                  />
              )
          })}
      </div>
  )
}


export default Day;

Day.propTypes = {
    events: PropTypes.array,
    
  };