import React from "react";
import ColumnTable from "./ColumnTable";
import SaidBar from "./SaidBar.jsx";



const Main = ({showPopup}) => {
  return (
    <section className="main" onClick={showPopup}>
      <div className="fixed">
      <div className="main-wrapper">
      <SaidBar />
       <ColumnTable  />
      </div>
      </div>
    </section>
  );
};

export default Main;
