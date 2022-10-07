import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorMessages: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cancelAccount() {
    const newAccount = {
      "id": new Date().getTime(),
      "firstName": "Dontavious",
      "lastName": "Green",
      "userId": "DontaviousG2022",
      "password": "password123",
      "emailAddress": "green.dontavious@gmail.com"

    }
  }

}
