import React from "react";
import Day from "./Day";
import SaidBar from "./SaidBar.jsx";



const Main = ({showPopup, events, monday}) => {
  return (
    <section className="main" onClick={showPopup}>
      <div className="main-wrapper">
      <SaidBar />
       <Day 				
       	monday={monday}
         events={events} />
      </div>
    </section>
  );
};

export default Main;
