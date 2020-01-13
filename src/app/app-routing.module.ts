import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmsListeComponent } from './films-liste/films-liste.component';
import { PersonnagesListeComponent} from './personnages-liste/personnages-liste.component';
import { PersonnageDetailsComponent } from './personnage-details/personnage-details.component';
import { QuotesListeComponent } from './quotes-liste/quotes-liste.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'films-liste', component: FilmsListeComponent},
  {path: 'personnages-liste', component: PersonnagesListeComponent},
  {path: 'quotes-liste', component: QuotesListeComponent},
  {path: 'personnage-details/:id', component: PersonnageDetailsComponent},
  {path: 'quote-details/:id', component: QuoteDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
