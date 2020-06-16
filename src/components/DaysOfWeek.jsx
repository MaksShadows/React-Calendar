import React from "react";
import { PureComponent } from "react";

const daysOfWeek = ["Mon", "Thu", "Wen", "Tue", "Fri", "Sat", "Sun"];

class DaysOfWeek extends PureComponent {
  render() {
    const daysOfWeekList = daysOfWeek.map((day) => {
      return (
        <span key={day} className="">
          {day}
        </span>
      );
    });
    return <div className="week">{daysOfWeekList}</div>;
  }
}

export default DaysOfWeek;