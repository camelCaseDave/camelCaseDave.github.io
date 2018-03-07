import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Experience extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        <div key="a" class="vertical-box">
          <div class="boxed-group-heading">
            <span>Chorus</span>
            <span class="right">September 2016 - Present</span>
          </div>
          <div class="boxed-group-body">
            <p>
              <ul>
                <li>Stuff</li>
                <li>More stuff</li>                
              </ul>
            </p>
          </div>
        </div>
        <div key="b" class="vertical-box">
          <div class="boxed-group-heading">
            <span>Pythagoras</span>
            <span class="right">August 2015 - September 2016</span>
          </div>
          <div class="boxed-group-body">
            <p>
              <ul>
                <li>Stuff</li>
                <li>More stuff</li>
              </ul>
            </p>
          </div>
        </div>
        <div key="c" class="vertical-box">
          <div class="boxed-group-heading">
            <span>Pythagoras</span>
            <span class="right">July 2013 - August 2014</span>
          </div>
          <div class="boxed-group-body">
            <p>
              <ul>
                <li>Stuff</li>
                <li>More stuff</li>
              </ul>
            </p>
          </div>
        </div>
      </FlipMove>
    );
  }
}

export default Experience;