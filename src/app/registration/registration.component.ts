import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorMessages: string = "";

  constructor(private accountService: AccountService) { }

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

  registerUser(registrationForm: NgForm) {
    console.log("bep bep")

  }

  cancelRegistration() {
    //cancel registration and bring user back to login
    this.accountService.$creatingNewUser.next(false);


  }
}
