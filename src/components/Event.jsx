import React, { Component } from 'react';



class Event extends Component {

    constructor(props){
        super(props);
        this.state={
            date: new Date(),
            startTime:new Date(`${this.date} ${this.props.endTime}`).getHours()/new Date(`${this.date} ${this.props.endTime}`).getMinutes(),
            endTime:new Date(`${this.date} ${this.props.endTime}`).getHours()/new Date(`${this.date} ${this.props.endTime}`).getMinutes(),

        }
    };

    
    render() {
        

        
        return (

            <div key={Math.random()}
             className="active_event">
             <span>{this.props.title}</span>
             <span>{`${this.state.startTime} - ${this.state.endTime}`}</span>
             <span>{this.props.description}</span>


             {/* {this.props.events.map((event) =>
                
                `${event.title}
                 ${event.date}
                 ${event.startTime}-${event.endTime}
                 ${event.description}
                 `
                )}  */}
            </div>

        );
    };
};

export default Event;