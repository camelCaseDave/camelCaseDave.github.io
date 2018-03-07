import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Experience extends Component {    
  render() {
    return (      
      <div>
        <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
          <div key="a">1</div>      
          <div key="b">2</div>
          <div key="c">3</div>
          <div key="d">4</div>   
          <div key="e">5</div>          
        </FlipMove>
       
      </div>
    );
  }
}

export default Experience;