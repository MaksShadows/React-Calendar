import React from "react";
import ColumnDay from "./ColumnDay";
import SaidBar from "./SaidBar.jsx";


const Main = ({showPopup}) => {
  return (
    <section className="main">
      <div className="main-wrapper">
      <SaidBar />
       <ColumnDay
         showPopup={showPopup} />
      </div>
    </section>
  );
};

export default Main;
