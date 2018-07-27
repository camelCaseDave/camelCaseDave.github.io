import React, { Component } from "react";
import { Container, Card, Image } from "semantic-ui-react";

import AboutCardFactory from "./AboutCardFactory";

class About extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Card.Group>
          {this.renderCards()}
        </Card.Group>
      </Container >
    );
  }

  renderCards() {
    const cards = AboutCardFactory.getCards();

    return (
      cards.map((card) =>
        <Card>
          <Image src={card.ImgSrc} />
          <Card.Content>
            <Card.Header>
              {card.Header}
            </Card.Header>
            <Card.Description>
              {card.Description}
            </Card.Description>
          </Card.Content>
        </Card>
      )
    );
  }
}

export default About;