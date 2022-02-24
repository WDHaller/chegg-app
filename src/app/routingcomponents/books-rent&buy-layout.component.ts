import { Component } from "@angular/core";
import { CardItemModel } from "../verticalcards/card-item.model";
import { mock_card3_list } from "../verticalcards/mock_card3_list";

@Component ({
 selector: 'chegg-books-rent&buy-layout',
 templateUrl: 'books-rent&buy-layout.component.html',
 styleUrls: ['books-rent&buy-layout.component.css']
})

export class BooksRentBuyLayoutComponent {
    card3s: CardItemModel [] = [];

    constructor() {
    
        for (var card of mock_card3_list) {
          console.log(card)
          this.card3s.push(card);
        }
      }
}