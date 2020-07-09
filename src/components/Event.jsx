import React, { Component } from 'react';


class Event extends Component {


    render() {

        return (

            <div key={Math.random()}
             className="active_event">
              <span>{this.props.title}111</span>
              {/* <span>{`${this.state.startTime} - ${this.state.endTime}`}</span>  */}
             <span>{this.props.description}111</span>  
            </div>

        );
    };
};

export default Event;