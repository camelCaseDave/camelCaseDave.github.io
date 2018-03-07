import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Certification extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        <div key="a" class="boxed-group">
          <p>MB2-718: Microsoft Dynamics 365 for Customer Service </p>
        </div>
        <div key="b" class="boxed-group">
          <p>MB2-715: Microsoft Dynamics 365 customer engagement for Online Deployment</p>
        </div>
        <div key="c" class="boxed-group">
          <p>MB2-716: Microsoft Dynamics 365 Customisation and Configuration</p>
        </div>
        <div key="d" class="boxed-group">
          <p>
            MB2-704: Microsoft Dynamics CRM Application
          </p>
        </div>
        <div key="e" class="boxed-group">
          <p>
            MB2-707: Microsoft Dynamics CRM Customisation and Configuration
          </p>
        </div>
      </FlipMove>
    );
  }
}

export default Certification;