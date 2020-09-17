import React, { Component } from 'react';
import Navigation  from './Navigation'
//import Week from './Week';
import SaidBar from "./SaidBar.jsx";

class Main extends Component {

  // state = {
  //     events,
  // }

  render() {
      const {  showPopup, week} = this.props;

      return (
      
    <section className="main"  onClick={showPopup}>
    <Navigation  week={week} />
     <div className="main-wrapper">
      {/* <Week weekDays={weekDays} />   */}
     <SaidBar />
     </div>
   </section>
      )
  }
}


export default Main;
