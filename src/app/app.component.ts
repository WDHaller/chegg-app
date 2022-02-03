import { Component } from '@angular/core';
import { CardItemModel } from './verticalcards/card-item.model';
import { CardType1Component } from './verticalcards/cardtype1.component';
import { mock_card_list } from './verticalcards/mock_card_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chegg';
  cards: CardItemModel [] = [];

  constructor() {
    for (var card of mock_card_list) {
      console.log(card)
      this.cards.push(card);
    }
  }
}
