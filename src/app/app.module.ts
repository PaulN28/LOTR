import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmsListeComponent } from './films-liste/films-liste.component';
import { PersonnagesListeComponent } from './personnages-liste/personnages-liste.component';
import { PersonnageDetailsComponent } from './personnage-details/personnage-details.component';
import { QuotesListeComponent } from './quotes-liste/quotes-liste.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './filter.pipe.ts/filter.pipe.ts.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    FilmsListeComponent,
    PersonnagesListeComponent,
    PersonnageDetailsComponent,
    QuotesListeComponent,
    QuoteDetailsComponent,
    ContactComponent,
    FilterPipe,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
