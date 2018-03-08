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
                <li>Delivering new and upgraded Dynamics CRM 2011 - 365 systems</li>
                <li>Agile Scrum master and ownership of projects throughout entire lifecycle; pre-sales to build and go-live support</li>                
                <li>Architecting codebases for Dynamics extensions with VSTS DevOps pipeline and test automation</li>
              </ul>
            </p>
          </div>
        </div>
        <div key="b" class="vertical-box">
          <div class="boxed-group-heading">
            <span>Pythagoras</span>
            <span class="right">July 2013 - September 2016*</span>
          </div>
          <div class="boxed-group-body">
            <p>
              <ul>
                <li>Full stack .NET extensions for Dynamics</li>
                <li>Adxstudio portal implementation and website integration</li>
                <li>SQL database architecture, maintenance and SSIS data migration</li>
                <li>Leading requirements workshops and playback sessions for PRINCE2 and Waterfall projects</li>
              </ul>
            </p>
            <p class="footer"> * Full-time placement for 2013/14, sponsored studying at University during 2015 and full-time thereafter</p>
          </div>
        </div>      
        
      </FlipMove>
    );
  }
}

export default Experience;