import React, { Component } from 'react';


class Event extends Component {


    render() {

        return (

            <div key={Math.random()}
             className="active_event">
             <span>{this.props.title}</span>
             <span>{`${this.state.startTime} - ${this.state.endTime}`}</span>
             <span>{this.props.description}</span>
            </div>

        );
    };
};

export default Event;