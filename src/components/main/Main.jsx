import React, { Component } from 'react';
import Navigation  from './Navigation'
import Week from './Week';
import SaidBar from "./SaidBar.jsx";
import events from '../../gateway/events.js';


class Main extends Component {

  state = {
        events,
   }

  render() {
      const { showPopup, week, weekStart,
       // events
        } = this.props;

      return (
      
    <section className="main"  onClick={showPopup}>
    <Navigation  week={week} />
     <div className="main-wrapper">
     <SaidBar />
      <Week weekStart={weekStart} events={this.state.events}/> 
     </div>
   </section>
      )
  }
}


export default Main;
