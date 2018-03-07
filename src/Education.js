import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Education extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        <div key="a" class="boxed-group">
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div key="b" class="boxed-group">
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        </div>
      </FlipMove>

    );
  }
}

export default Education;