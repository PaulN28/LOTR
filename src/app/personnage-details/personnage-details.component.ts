import { Component, OnInit } from "@angular/core";
import { Personnage } from "../models/personnage.model";
import { ActivatedRoute } from "@angular/router";
import { PersonnageService } from "../services/personnage.service";
import { Quote } from "../models/quote.models";

@Component({
  selector: "app-personnage-details",
  templateUrl: "./personnage-details.component.html",
  styleUrls: ["./personnage-details.component.scss"]
})
export class PersonnageDetailsComponent implements OnInit {
  personnage: Personnage;
  quotes: Quote[];
  personnage_id: String;
  constructor(
    private personnageService: PersonnageService,
    private route: ActivatedRoute
  ) {}

  getPersonnageID() {
    this.personnage_id = this.route.snapshot.params.id; //permet de connaitre l'id du personnage actuel
  }

  getOnePersonnage() {
    this.personnageService
      .getOnePersonnage(this.personnage_id)
      .subscribe(personnage => {
        this.personnage = personnage;
      });
  }

  getAllQuotesFromOnePersonnage() {
    this.personnageService
      .getAllQuotesFromOnePersonnage(this.personnage_id)
      .subscribe(quotes => {
        this.quotes = quotes["docs"];
      });
  }

  ngOnInit() {
    this.getPersonnageID();
    this.getOnePersonnage();
    this.getAllQuotesFromOnePersonnage();
  }
}
