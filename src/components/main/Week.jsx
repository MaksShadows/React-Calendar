import React from 'react';
import Day from './Day';





const Week = ({events}) => {

    const  weekStart = Array(7).fill();

    return (
        <>
            {
             weekStart.map((dayStart) =>{

                dayStart = new Date();
                // const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
                //   //getting all events from the day we will render
              //   const dayEvents = events.filter(event => event.dateFrom > dayStart && event.dateTo < dayEnd);

                return (
                    <Day key={dayStart.getDate()}
                    dataDay={dayStart.getDate()} 
                   
                      />
                )
             })
            }
          
        </>
    )
}

export default Week;