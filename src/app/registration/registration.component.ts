import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../account.service";
import {IRegistrationForm} from "../Interface/IRegistrationForm";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstNameErrorMessages: string | null = null;
  lastNameErrorMessages: string | null = null;
  userNameErrorMessages: string | null = null;
  emailNameErrorMessages: string | null = null;
  email2NameErrorMessages: string | null = null;
  email3NameErrorMessages: string | null = null;
  passwordErrorMessages: string | null = null;
  password2ErrorMessages: string | null = null;
  password3ErrorMessages: string | null = null;
  password4ErrorMessages: string | null = null;
  //password5ErrorMessages: string | null = null;


  constructor(private accountService: AccountService) {

    this.accountService.$firstNameError.subscribe(
        lastNameRegError => this.firstNameErrorMessages = lastNameRegError);

    this.accountService.$lastNameError.subscribe(
        RegError => this.lastNameErrorMessages = RegError);

    this.accountService.$emailError.subscribe(
        lastNameRegError => this.emailNameErrorMessages = lastNameRegError);

    this.accountService.$email2Error.subscribe(
        lastNameRegError => this.email2NameErrorMessages = lastNameRegError);

    this.accountService.$email3Error.subscribe(
        lastNameRegError => this.email3NameErrorMessages = lastNameRegError);

    this.accountService.$userNameError.subscribe(
        lastNameRegError => this.userNameErrorMessages = lastNameRegError);

    this.accountService.$passwordError.subscribe(
        lastNameRegError => this.passwordErrorMessages = lastNameRegError);

    this.accountService.$password2Error.subscribe(
        lastNameRegError => this.password2ErrorMessages = lastNameRegError);

    this.accountService.$password3Error.subscribe(
        lastNameRegError => this.password3ErrorMessages = lastNameRegError);

    this.accountService.$password4Error.subscribe(
        lastNameRegError => this.password4ErrorMessages = lastNameRegError);

    // this.accountService.$password5Error.subscribe(
    //     lastNameRegError => this.password5ErrorMessages = lastNameRegError);

  }
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

  //sends data from user input 'registration form' to be validated
  registerUser(registrationForm: NgForm) {
    this.accountService.registerForms(
        registrationForm.value as IRegistrationForm
    );
  }

  cancelRegistration() {
    //cancel registration and bring user back to the login
    this.accountService.$creatingNewUser.next(false);


  }
}
