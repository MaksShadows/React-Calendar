import React, { Component } from 'react';
import Navigation from './Navigation'
import Week from './Week';
import SaidBar from "./SaidBar.jsx";
import PropTypes from 'prop-types';

//import events from '../../gateway/events.js';


class Main extends Component {

  //  state = {
  //       events,
  //   }

  render() {
    const { showPopup, week, weekStart, onDeleteEvent,
      //events
    } = this.props;

    return (

      <section className="main" onClick={showPopup}>
        <Navigation week={week} />
        <div className="main-wrapper">
          <SaidBar />
          <Week weekStart={weekStart}
            onDeleteEvent={onDeleteEvent}
            events={this.props.events}
          />
        </div>
      </section>
    )
  }
}


export default Main;

Main.propTypes = {
  showPopup: PropTypes.func,
  events: PropTypes.array,
  week: PropTypes.number,
};