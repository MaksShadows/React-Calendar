import React, { Component } from 'react';


const daysOfWeek = ["Mon", "Thu", "Wen", "Tue", "Fri", "Sat", "Sun"];

class WeekDays  extends Component {
  render() {
    const daysOfWeekList = daysOfWeek.map((day) => {
      return (
        <div key={day} className="week-days">
          {day}
        </div>
      );
    });
    return <div className="week">{daysOfWeekList}</div>;
  }

  
}

export default WeekDays ;