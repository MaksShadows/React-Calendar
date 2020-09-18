import React from "react";
import Event from "../Event";
import  formatMins  from '../common/utilities.js';



const Hour = ({ dataHour, hourEvents }) => {

  return (
      <div className="column-item"  data-time={dataHour + 1}>
          {/* if no events in the current hour nothing will render here */}
          {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
              const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
              const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

              return (
                  <Event
                      key={id}
                      //calculating event height = duration of event in minutes
                      height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
                      marginTop={dateFrom.getMinutes()}
                      time={`${eventStart} - ${eventEnd}`}
                      title={title}
                  />
              )
          })}
      </div>
  )
}

export default Hour;
