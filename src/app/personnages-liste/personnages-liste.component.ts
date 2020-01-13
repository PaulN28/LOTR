import { Component, OnInit } from "@angular/core";
import { Personnage } from "../models/personnage.model";
import { PersonnageService } from "../services/personnage.service";

@Component({
  selector: "app-personnages-liste",
  templateUrl: "./personnages-liste.component.html",
  styleUrls: ["./personnages-liste.component.scss"]
})
export class PersonnagesListeComponent implements OnInit {
  personnages: Personnage[] = [];
  personnages_name: Personnage[] = [];
  searchText: String;
  i : number;

  constructor(private personnageService: PersonnageService) {}

  getAllPersonnages() {
    this.personnageService.getAllPersonnages().subscribe(personnages => {
      this.personnages = personnages["docs"];
      personnages["docs"].forEach(personnage => {
        this.personnages_name.push(personnage.name);}); //tableau inutilisé car le filtre ne fonctionne pas
    });
  }

  ngOnInit() {
    this.getAllPersonnages();
  }
}
