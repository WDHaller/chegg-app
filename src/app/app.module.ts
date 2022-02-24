import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FreeText1Component } from './freetext/freetext1.component';
import { FreeText2Component } from './freetext/freetext2.component';
import { FreeText3Component } from './freetext/freetext3.component';
import { JumboTron1Component } from './jumbotrons/jumbotron1.component';
import { JumboTron3Component } from './jumbotrons/jumbotron3.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { TopNavBar2Component } from './navigation/topnavbar2.component';
import { CardType1Component } from './verticalcards/cardtype1.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksRentBuyLayoutComponent } from './routingcomponents/books-rent&buy-layout.component';
import { HomeLayoutComponent } from './routingcomponents/home-layout.component';
import { BooksReturnLayoutComponent } from './routingcomponents/books-return-layout.component';
import { BooksSellLayoutComponent } from './routingcomponents/books-sell-layout.component';
import { BooksReadLayoutComponent } from './routingcomponents/books-read-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    TopNavBar2Component,
    CardType1Component,
    FreeText1Component,
    FreeText2Component,
    FreeText3Component,
    JumboTron1Component, 
    JumboTron3Component,
    BooksRentBuyLayoutComponent,
    HomeLayoutComponent,
    BooksReturnLayoutComponent,
    BooksSellLayoutComponent,
    BooksReadLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
