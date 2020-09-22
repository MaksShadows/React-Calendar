import React, { Component } from 'react';
//import moment from 'moment';


class RedLine extends Component {

  state = {
    hourRedLine: new Date().getHours(),
    minRedLine: new Date().getMinutes(),
  };

  componentDidMount() {
     this.timeRed =  setInterval(() => {
      this.setState({
        hourRedLine: new Date().getHours(),
        minRedLine: new Date().getMinutes(),
      });
    }, 50000);
  }
  componentWillUnmount() {
    clearInterval(this.timeRed);
}

  render() {
    return (
      <div className="redLine"></div>
    )
  }
};

export default RedLine;