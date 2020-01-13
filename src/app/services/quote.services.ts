import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from '../models/quote.models';

@Injectable({
  providedIn: 'root'
})
export class QuoteService { 

  getAllQuotes(){
    const headers =  new HttpHeaders({
      'Authorization': 'Bearer EIOQOqzTr2ZcxR4m1iSs'
    }); 
    return this.http
                    .get<Quote[]>('https://the-one-api.herokuapp.com/v1/quote', {headers})
  }
 
  getOneQuote(quote_id: String) {
    const headers =  new HttpHeaders({
      'Authorization': 'Bearer EIOQOqzTr2ZcxR4m1iSs'
    }); 
    return this.http
                    .get<Quote>('https://the-one-api.herokuapp.com/v1/quote/' + quote_id, {headers})    
    }

  constructor(private http: HttpClient) { 
  }
}
