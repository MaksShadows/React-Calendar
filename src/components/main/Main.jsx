import React from "react";
import ColumnTable from "./ColumnTable";
import SaidBar from "./SaidBar.jsx";



const Main = ({showPopup}) => {
  return (
    <section className="main">
      <div className="fixed">
      <div className="main-wrapper">
      <SaidBar />
       <ColumnTable showPopup={showPopup} />
      </div>
      </div>
    </section>
  );
};

export default Main;
