import React, { Component } from 'react';



class Event extends Component {

    constructor(props){
        super(props);
        this.state={
            date: new Date(),
             startTime:new Date().getHours(),
             endTime:new Date().getHours(),

        }
    };

    
    render() {
        

        
        return (

            <div key={Math.random()}
             className="active_event">
             {/* <span>{this.props.title}</span>
             <span>{`${this.state.startTime} - ${this.state.endTime}`}</span>
             <span>{this.props.description}</span> */}


              {this.props.events.map((event) =>
                
                `${event.title}
                 ${event.date}
                 ${this.state.startTime} - ${this.state.endTime}
                 ${event.description}
                 `
                )}  
            </div>

        );
    };
};

export default Event;