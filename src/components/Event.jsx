import React, { Component } from 'react';


class Event extends Component {


    render() {

        return (

            <div key={Math.random()}
             className="active_event">
              {this.props.events.map((event) =>
                `${event.title} 
                 ${event.date} 
                 ${event.startTime}
                 ${event.endTime}
                 `
                )} 

             {/* <span>{this.props.title}</span>
              <span>{`${this.state.startTime} - ${this.state.endTime}`}</span> 
             <span>{this.props.description}</span>  */}
            </div>

        );
    };
};

export default Event;