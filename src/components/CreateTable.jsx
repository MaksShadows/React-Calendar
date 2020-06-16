import React from "react";
import  generateNumbers from "./utilities";


const CreateTable = () => {
   
  const lines = generateNumbers(0, 23).map(arg => (
    <div key={arg} className="column-day__item"></div>
  ));
  return (<div className="column-day__item">{lines}</div>)

};

export default CreateTable;


