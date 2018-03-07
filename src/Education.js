import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Education extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        <div key="a" class="vertical-box">
          <div class="boxed-group-heading">
            <span>University of Plymouth</span>
            <span class="right">2010 - 2014</span>
          </div>
          <div class="boxed-group-body">
            <p>
              <ul>
                <li>First Class honours in Computer Science</li>
                <li>Revell Research Systems Prize: awarded to the top final year student in computing</li>
                <li>Dissertation titled "CRM in Higher Education". 84% mark, 2nd overall in year group</li>
              </ul>
            </p>
          </div>
        </div>
        <div key="b" class="vertical-box">
          <div class="boxed-group-heading">
            <span>Bristol Grammar School</span>
            <span class="right">2003 - 2010</span>
          </div>
          <div class="boxed-group-body">
            <p>
              <ul>
                <li>A-Levels in Biology, Maths, Philosophy and Physics</li>
                <li>10 GCSE's including A's in Maths and English</li>                
              </ul>
            </p>
          </div>
        </div>
      </FlipMove>
    );
  }
}

export default Education;