import React, { Component } from 'react';
import Navigation  from './Navigation'
import Week from './Week';
import SaidBar from "./SaidBar.jsx";

class Main extends Component {

  // state = {
  //     events,
  // }

  render() {
      const { showPopup, week, weekStart} = this.props;

      return (
      
    <section className="main"  onClick={showPopup}>
    <Navigation  week={week} />
     <div className="main-wrapper">
     <SaidBar />
      <Week weekStart={weekStart} week={week} /> 
     </div>
   </section>
      )
  }
}


export default Main;
