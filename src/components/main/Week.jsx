import React from 'react';
import Day from './Day';



const Week = () => {

    const weekStart = Array(7).fill();


    return (
        <>
            {
             weekStart.map(() =>{
                return (
                    <Day key={Math.random()}/>
                )
             })
            }
          
        </>
    )
}

export default Week;