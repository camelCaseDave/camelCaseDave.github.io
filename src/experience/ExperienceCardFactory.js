import React from "react";

import ExperienceCard from "./ExperienceCard";

export default class ExperienceCardFactory {
    static getCards() {
        let cards = [];

        cards.push(this.getCapCard());
        cards.push(this.getChorusCard());
        cards.push(this.getPythagorasCard());

        return cards;
    }

    static getCapCard() {
        const capCard = new ExperienceCard(
            "Capgemini",
            "July 2018 - Present",
            [
                "DevOps pipeline implementation and extension"
            ]
        );

        return capCard;
    }

    static getChorusCard() {
        const chorusCard = new ExperienceCard(
            "Chorus",
            "September 2016 - June 2018",
            [
                "Delivering new and upgraded Dynamics CRM 2011 - 365 systems",
                "Agile Scrum master and ownership of projects throughout entire lifecycle; pre-sales to build and go-live support",
                "Architecting codebases for Dynamics extensions with VSTS DevOps pipeline and test automation"
            ]
        );

        return chorusCard;
    }

    static getPythagorasCard() {
        const pythagorasCard = new ExperienceCard(
            "Pythagoras",
            "July 2013 - September 2016*",
            [
                "Full stack .NET extensions for Dynamics",
                "Adxstudio portal implementation and website integration",
                "SQL database architecture, maintenance and SSIS data migration",
                "Leading requirements workshops and playback sessions for PRINCE2 and Waterfall projects"
            ],
            " * Full-time placement for 2013/14, sponsored studying at University during 2015 and full-time thereafter"
        );

        return pythagorasCard;
    }
}