import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Quote } from "../models/quote.models";
import { QuoteService } from "../services/quote.services";
import { Personnage } from '../models/personnage.model';

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.scss"]
})
export class QuoteDetailsComponent implements OnInit {
  quote: Quote;
  personnage: Personnage;
  quote_id: String;
  personnage_id: String;
  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute
  ) {}

  getQuoteId() {
    this.quote_id = this.route.snapshot.params.id;
  }

  getOneQuote() {
    this.quoteService.getOneQuote(this.quote_id).subscribe(quote => {
      this.quote = quote;
    }); 
  }

  ngOnInit() {
    this.getQuoteId();
    this.getOneQuote(); 
  }
}
