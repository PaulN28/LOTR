import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote.models';
import { QuoteService } from '../services/quote.services';

@Component({
  selector: 'app-quotes-liste',
  templateUrl: './quotes-liste.component.html',
  styleUrls: ['./quotes-liste.component.scss']
})
export class QuotesListeComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(private quoteService : QuoteService) {}

   getAllQuotes(){
      this.quoteService.getAllQuotes()
                          .subscribe(quotes => 
                          {this.quotes = quotes['docs']
      });     
    }

  ngOnInit() {
    this.getAllQuotes();   
  }

}
