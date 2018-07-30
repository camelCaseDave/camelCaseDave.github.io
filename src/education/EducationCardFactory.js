import React from "react";

import EducationCard from "./EducationCard";

export default class EducationCardFactory {
    static getCards() {
        let cards = [];

        cards.push(this.getPlymouthCard());
        cards.push(this.getBgsCard());
        
        return cards;
    }

    static getPlymouthCard() {
        const plymouthCard = new EducationCard(
            "University of Plymouth",
            "2010 - 2014",
            [
                "First Class honours in Computer Science",
                "Revell Research Systems Prize: awarded to the top final year student in computing",
                "Dissertation titled 'CRM in Higher Education' - 84% mark"
            ]
        );

        return plymouthCard;
    }

    static getBgsCard() {
        const bgsCard = new EducationCard(
            "Bristol Grammar School",
            "2003 - 2010",
            [
                "A-Levels in Biology, Maths, Philosophy and Physics",
                "10 GCSE's including A's in Maths and English"
            ]
        );

        return bgsCard;
    }
}