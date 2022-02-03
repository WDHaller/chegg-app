import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Card1Component } from './components/card1.component';
import { Card2Component } from './components/card2.component';
import { Card3Component } from './components/card3.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { TopNavBar2Component } from './navigation/topnavbar2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    TopNavBar2Component,
    Card1Component,
    Card2Component,
    Card3Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
