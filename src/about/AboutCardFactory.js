import React from "react";

import AboutCard from "./AboutCard";

import GmLogo from "../media/gm-logo.png"
import D365Logo from "../media/d365-logo.png";
import ReactLogo from "../media/react-logo.png";
import TddLogo from "../media/tdd-logo.png";
import TsLogo from "../media/ts-logo.png";
import CLogo from "../media/c-logo.png";

export default class AboutCardFactory {
  static getCards() {
    let cards = [];   

    cards.push(this.getUnitTestCard());   
    cards.push(this.getDynamicsCard());
    cards.push(this.getCCard());
    cards.push(this.getRunningCard());
    cards.push(this.getReactCard());  
    cards.push(this.getTsCard());  

    return cards;
  }

  static getUnitTestCard() {
    const unitTestCard = new AboutCard(
      "Unit Testing",
      <span>I've authored <a href="https://github.com/camelCaseDave/xrm-mock">xrm-mock</a>, an open source tool which aims to aid the Dynamics community in unit testing their client-side CRM customisations.</span>,
      TddLogo
    );

    return unitTestCard;
  }

  static getRunningCard() {
    const runningCard = new AboutCard(
      "Running",
      "The Green Man avatar I use is a nod to the first ultramarathon event I competed in.",
      GmLogo
    );

    return runningCard;
  }

  static getDynamicsCard() {
    const dynamicsCard = new AboutCard(
      "Dynamics 365",
      "I've been Consulting for Microsoft Dynamics 365 professionally since 2013, specialising in customisations and extensions.",
      D365Logo
    );

    return dynamicsCard;
  }

  static getCCard() {
    const cCard = new AboutCard(
      "C# & .NET",
      <span>7 years experience writing in C#, specifically extending Dynamics using the <a href="https://msdn.microsoft.com/en-gb/library/microsoft.xrm.sdk.aspx">Xrm SDK framework.</a></span>,
      CLogo
    );

    return cCard;
  }

  static getReactCard() {
    const reactCard = new AboutCard(
      "React JS",
      <span>Though specialising in server-side extensions, my experience in software engineering includes web frameworks such as React and Angular. Past projects have included SPA's integrating with Dynamics via <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-libraries">ADAL</a>, portal web forms and <a href="https://github.com/camelCaseDave/xrm-mock">xrm-mock</a>.</span>,
      ReactLogo
    );

    return reactCard;
  }

  static getTsCard() {
    const tsCard = new AboutCard(
      "TypeScript",
      "With a background in object-oriented, strongly typed programming languages, TypeScript is my language of choice for web customisations.",
      TsLogo
    );

    return tsCard;
  }
}