import React, { Component } from 'react';


class RedLine extends Component {

  state = {
    hourRedLine: new Date().getHours(),
    minRedLine: new Date().getMinutes(),
  };

  componentDidMount() {
    this.timeRed = setInterval(() => {
      this.setState({
        hourRedLine: new Date().getHours(),
        minRedLine: new Date().getMinutes(),
      });
    }, 60000);
  }
  componentWillUnmount() {
    clearInterval(this.timeRed);
  }

  render() {
    const { hourRedLine, minRedLine } = this.state;


    const style = `${hourRedLine + minRedLine * (60 / 1000)}px`;

    return (
      <div className="redLine" style={{ top: style }}></div>
    )
  }
};

export default RedLine;