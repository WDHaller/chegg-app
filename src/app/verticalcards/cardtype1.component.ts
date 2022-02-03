import { Component } from "@angular/core";

@Component ({
    selector: 'chegg-cardtype1',
    templateUrl: 'cardtype1.component.html',
    styleUrls: ['cardtype1.component.css']
})
export class CardType1Component {
    img: string;
    title: string;
    text: string;
    link: string;

    constructor() {
        this.img = "";
        this.title = "MISSING";
        this.text = "MISSING";
        this.link = "MISSING LINK";
    }

}