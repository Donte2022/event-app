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
  email0NameErrorMessages: string | null = null;
  emailNameErrorMessages: string | null = null;
  email2NameErrorMessages: string | null = null;
  email3NameErrorMessages: string | null = null;
  passwordErrorMessages: string | null = null;
  password2ErrorMessages: string | null = null;
  password3ErrorMessages: string | null = null;
  password4ErrorMessages: string | null = null;
  //password5ErrorMessages: string | null = null;
  registerNewUserMessageSuccess: string | null = null;
  registerNewUserMessageFailure: string | null = null;


  constructor(private accountService: AccountService) {

    this.accountService.$firstNameError.subscribe(
        firstNameRegError => this.firstNameErrorMessages = firstNameRegError);

    this.accountService.$lastNameError.subscribe(
        lastNameRegError => this.lastNameErrorMessages = lastNameRegError);

    this.accountService.$email0Error.subscribe(
        email0RegError => this.email0NameErrorMessages = email0RegError);

    this.accountService.$emailError.subscribe(
        emailRegError => this.emailNameErrorMessages = emailRegError);

    this.accountService.$email2Error.subscribe(
        email2RegError => this.email2NameErrorMessages = email2RegError);

    this.accountService.$email3Error.subscribe(
        email3RegError => this.email3NameErrorMessages = email3RegError);

    this.accountService.$userNameError.subscribe(
        userNameRegError => this.userNameErrorMessages = userNameRegError);

    this.accountService.$passwordError.subscribe(
        passwordRegError => this.passwordErrorMessages = passwordRegError);

    this.accountService.$password2Error.subscribe(
        password2RegError => this.password2ErrorMessages = password2RegError);

    this.accountService.$password3Error.subscribe(
        password3RegError => this.password3ErrorMessages = password3RegError);

    // this.accountService.$password4Error.subscribe(
    //     lastNameRegError => this.password4ErrorMessages = lastNameRegError);

    // this.accountService.$password5Error.subscribe(
    //     lastNameRegError => this.password5ErrorMessages = lastNameRegError);

    // this.accountService.$password6Error.subscribe(
    //     lastNameRegError => this.password5ErrorMessages = lastNameRegError);

    this.accountService.$RegSuccessHttp.subscribe(
        $RegSuccessHttp => this.registerNewUserMessageSuccess = $RegSuccessHttp);

    this.accountService.$RegErrorHttp.subscribe(
        $RegErrorHttp => this.registerNewUserMessageFailure = $RegErrorHttp);


  }
  ngOnInit(): void {
  }

  // cancelAccount() {
  //   const newAccount = {
  //     "id": new Date().getTime(),
  //     "firstName": "Dontavious",
  //     "lastName": "Green",
  //     "userId": "DontaviousG2022",
  //     "password": "password123",
  //     "emailAddress": "green.dontavious@gmail.com"
  //
  //   }
  // }

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
