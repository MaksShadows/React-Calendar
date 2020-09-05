import React from "react";
import Week from './Week'
//import Day from "./Day";
import SaidBar from "./SaidBar.jsx";



const Main = ({showPopup, events, monday, week}) => {

  return (
    <section className="main" key={monday} onClick={showPopup}>
      <div className="main-wrapper">
      <SaidBar />
      <Week week={week} events={events} />

      
      {/* {
          events.map(() => {

              const filterEvents = events.filter(event => new Date(`${event.date} ${event.startTime}`).getHours());
                  return (
                          <Day key={Math.random()} monday={monday} events={filterEvents} />
                            )
              })
      } */}

         {/* <Day 				
       	monday={monday}
         events={events} />   */}
      </div>
    </section>
  );
};

export default Main;
