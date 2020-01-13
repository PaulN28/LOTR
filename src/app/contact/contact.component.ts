import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  first_name: string;
  message: string;

  constructor() { }

  onSubmitForm() {
    const myInfos = "Vos données saisies : Nom : " + this.name + 
                                             "Prénom : " + this.first_name +
                                             "Email : " + this.email +
                                             "Message : " + this.message;
    document.querySelector("#alert").innerHTML="<p>" + myInfos + "</p>"; //modification de la div 'alert' avec les informations saisies
  }

  ngOnInit() {
  }

}
