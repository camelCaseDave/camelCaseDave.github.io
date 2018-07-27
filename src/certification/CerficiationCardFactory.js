import React from "react";

import CertificationCard from "./CertificationCard";

export default class CertificationCardFactory {
    static getCards() {
        let cards = [];

        const exam718 = new CertificationCard("MB2-718: Microsoft Dynamics 365 for Customer Service", 718);
        const exam715 = new CertificationCard("MB2-715: Microsoft Dynamics 365 customer engagement for Online Deployment", 715);
        const exam716 = new CertificationCard("MB2-716: Microsoft Dynamics 365 Customisation and Configuration", 716);
        const exam704 = new CertificationCard("MB2-704: Microsoft Dynamics CRM Application", 704);
        const exam707 = new CertificationCard("MB2-707: Microsoft Dynamics CRM Customisation and Configuration", 707);

        cards.push(exam718);
        cards.push(exam715);
        cards.push(exam716);
        cards.push(exam704);
        cards.push(exam707);

        return cards;
    }
}