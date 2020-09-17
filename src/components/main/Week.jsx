import React from 'react';
import Day from './Day';



const Week = ({  weekDays, events }) => {

    return (
        <div className="column-day">
            { weekDays.map(dayStart => {
                // const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

                // //getting all events from the day we will render
                // const dayEvents = events.filter(event => event.dateFrom > dayStart && event.dateTo < dayEnd);

                return (
                    <Day key={dayStart}/>
                )
            })}
        </div>
    )
}

export default Week;