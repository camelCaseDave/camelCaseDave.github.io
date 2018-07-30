import React, { Component } from "react";
import FlipMove from "react-flip-move";

import EducationCardFactory from "./EducationCardFactory";

class Education extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        {this.renderCards()}
      </FlipMove>
    );
  }

  renderCards() {
    const cards = EducationCardFactory.getCards();

    return cards.map((card) =>
      <div key={card.Institution} class="vertical-box">
        <div class="boxed-group-heading">
          <span>{card.Institution}</span>
          <span class="right">{card.Duration}</span>
        </div>
        <div class="boxed-group-body">
          <p>
            <ul>
              {
                card.Pointers.map((pointer) =>
                  <li>{pointer}</li>
                )}
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Education;