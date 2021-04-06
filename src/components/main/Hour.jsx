import React from "react";
import Event from "../Event";
import RedLine from "../main/RedLine";
import formatMins from '../common/utilities.js';


import moment from 'moment'


const Hour = ({ dataHour, hourEvents, hour, dayStart, handleDeleteEvent }) => {


    const isRedLine = moment(dayStart).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD") && hour === new Date().getHours();


    return (
        <div className="column-item" data-time={dataHour + 1}>
            {/* if no events in the current hour nothing will render here */}
            {hourEvents.map(({ id, dateFrom, dateTo, title, event }) => {
                const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
                const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

                return (
                    <Event
                        key={id}
                        id={Math.random()}
                        {...event}
                        //calculating event height = duration of event in minutes
                        height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
                        marginTop={dateFrom.getMinutes()}
                        time={`${eventStart} - ${eventEnd}`}
                        title={title}
                        hourEvents={hourEvents}
                        handleDeleteEvent={handleDeleteEvent}
                    />
                )
            })}
            {isRedLine && <RedLine />}
        </div>
    )
}



// const Hour = ({ dataHour, hourEvents, hour, dayStart, handleDeleteEvent }) => {


//     const isRedLine = moment(dayStart).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD") && hour === new Date().getHours();


//     return (
//         <div className="column-item" data-time={dataHour + 1}>

//             {
//                 hourEvents.map((event, dateFrom, dateTo, title,) => {

//                     // const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
//                     // const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

//                     return <Event
//                         key={event.id}
//                         event={event}
//                         //calculating event height = duration of event in minutes
//                         // height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
//                         // marginTop={dateFrom.getMinutes()}
//                         // time={`${eventStart} - ${eventEnd}`}
//                         title={title}
//                         hour={hour}
//                         handleDeleteEvent={handleDeleteEvent} />

//                 })


//             }

//             {isRedLine && <RedLine />}

//         </div>
//     )
// }

export default Hour;

