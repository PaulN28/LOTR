import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personnage } from '../models/personnage.model';
import { Quote } from '../models/quote.models';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService { 

  getAllPersonnages(){
    const headers =  new HttpHeaders({
      'Authorization': 'Bearer EIOQOqzTr2ZcxR4m1iSs'
    }); 
    return this.http
                    .get<Personnage[]>('https://the-one-api.herokuapp.com/v1/character', {headers})
  }
 
  getOnePersonnage(personnage_id: String) {
    const headers =  new HttpHeaders({
      'Authorization': 'Bearer EIOQOqzTr2ZcxR4m1iSs'
    }); 
    return this.http
                    .get<Personnage>('https://the-one-api.herokuapp.com/v1/character/' + personnage_id, {headers})    
    }

  getAllQuotesFromOnePersonnage(personnage_id: String) {
    const headers =  new HttpHeaders({
      'Authorization': 'Bearer EIOQOqzTr2ZcxR4m1iSs'
    }); 
    return this.http
                    .get<Quote[]>('https://the-one-api.herokuapp.com/v1/character/' + personnage_id + '/quote', {headers})    
    }
  constructor(private http: HttpClient) { 
  }
}
