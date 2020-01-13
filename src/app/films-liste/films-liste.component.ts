import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-films-liste',
  templateUrl: './films-liste.component.html',
  styleUrls: ['./films-liste.component.scss']
})
export class FilmsListeComponent implements OnInit {

  films: Film[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer EIOQOqzTr2ZcxR4m1iSs'
    })
    this.http
    .get<Film[]>('https://the-one-api.herokuapp.com/v1/movie', {headers})
    .subscribe(films => 
      {this.films = films['docs']});
  }


}
