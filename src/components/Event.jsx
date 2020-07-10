import React, { Component } from 'react';


class Event extends Component {
    state={
        events:[
            {
              id: 1,
              title: 'One',
              date: '08-07-2020',
              startTime: '20:00',
              endTime: '20:30',
              description: 'first',
          }, ]
    }
    render() {

        return (

            <div key={Math.random()}
             className="active_event">
             {this.state.events.map((event) =>
                `${event.title}
                 ${event.date}
                 ${event.startTime}-${event.endTime}
                 ${event.description}
                 `
                )} 
            </div>

        );
    };
};

export default Event;