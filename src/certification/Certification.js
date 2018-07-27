import React, { Component } from "react";
import FlipMove from "react-flip-move";

import CertificationCardFactory from "./CerficiationCardFactory";

class Certification extends Component {
  render() {
    return (
      <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical"  >
        {this.renderCards()}
      </FlipMove>
    );
  }

  renderCards() {
    const cards = CertificationCardFactory.getCards();

    return cards.map((card) => 
      <div key = {card.Key} class="boxed-group">
        <p>{card.Title}</p>
      </div>
    );
  }
}

export default Certification;