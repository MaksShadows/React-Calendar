import React from "react";
import ColumnDay from "./ColumnDay";
import SaidBar from "./SaidBar.jsx";


const Main = ({showPopup}) => {
  return (
    <section className="main">
     <div className="fixed">
     <div className="main-wrapper">
      <SaidBar />
       <ColumnDay
         showPopup={showPopup} />
      </div>
     </div>
    </section>
  );
};

export default Main;
