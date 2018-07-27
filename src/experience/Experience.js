import React, { Component } from "react";
import FlipMove from "react-flip-move";

import ExperienceCard from "./ExperienceCard";
import ExperienceCardFactory from "./ExperienceCardFactory";

class Experience extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        {this.renderCards()}
      </FlipMove>
    );
  }

  renderCards() {
    const cards = ExperienceCardFactory.getCards();

    return cards.map((card) =>
      <div key={card.Company} class="vertical-box">
        <div class="boxed-group-heading">
          <span>{card.Company}</span>
          <span class="right">{card.Duration}</span>
        </div>
        <div class="boxed-group-body">
          <p>
            <ul>
              {card.Tasks.map((task) =>
                <li>{task}</li>
              )}
            </ul>
          </p>
          {card.Footer}
        </div>
      </div>
    );
  }
}

export default Experience;