import React from 'react';
import Day from './Day';

import PropTypes from 'prop-types';


const Week = ({ weekStart, events, handleDeleteEvent }) => {

    return (
        <>
            {
                weekStart.map(dayStart => {

                    const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
                    //   //getting all events from the day we will render
                    const dayEvents = events.filter(event => event.dateFrom > dayStart && event.dateTo < dayEnd);

                    return (
                        <Day key={dayStart.getDate()}
                            dataDay={dayStart.getDate()}
                            events={events}
                            dayStart={dayStart}
                            dayEvents={dayEvents}
                            handleDeleteEvent={handleDeleteEvent}
                        />
                    )
                })
            }

        </>
    )
}

export default Week;

Week.propTypes = {
    weekStart: PropTypes.array,
    events: PropTypes.array,
};