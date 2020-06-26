import React from "react";
import ColumnTable from "./Day";
import SaidBar from "./SaidBar.jsx";



const Main = ({showPopup}) => {
  return (
    <section className="main" onClick={showPopup}>
      <div className="fixed"></div>
      <div className="main-wrapper">
      <SaidBar />
       <ColumnTable  />
      </div>
    </section>
  );
};

export default Main;
