import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAccount} from "./Interface/IAccount";
import {v4 as uuidv4} from 'uuid';
import {ILoginForm} from "./Interface/ILoginForm";
import {NgForm} from "@angular/forms";
import {IRegistrationForm} from "./Interface/IRegistrationForm";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  $creatingNewUser = new BehaviorSubject<boolean>(false);

  //Error messages for Registration
  $firstNameError = new BehaviorSubject<string | null>(null);
  $lastNameError = new BehaviorSubject<string | null>(null);
  $userNameError = new BehaviorSubject<string | null>(null);
  $passwordError = new BehaviorSubject<string | null>(null);
  $password2Error = new BehaviorSubject<string | null>(null);
  $password3Error = new BehaviorSubject<string | null>(null);
  $password4Error = new BehaviorSubject<string | null>(null);
  $emailError = new BehaviorSubject<string | null>(null);
  $email2Error = new BehaviorSubject<string | null>(null);
  $email3Error = new BehaviorSubject<string | null>(null);



  private RegErrorEmaillength = "Your email address must be greater than 5 characters long."
  private RegErrorEmailAtSymbol = "Your email address must contain an '@' symbol."
  private RegErrorEmailDotSymbol = "Your email address must contain an '.' symbol."
  private RegErrorFirstName = "You must include a first name.";
  private RegErrorLastName = "You must include a last name.";
  private RegErrorUserNameMinLength = "You must include a username.";
  private RegErrorPasswordMinLength = "You must include a password.";
  private RegErrorPasswordShort = "Your password must be at least 5 characters in length.";
  private RegErrorPasswordMaxLength = "Your password must not contain no more than 15 characters total.";
  //private RegErrorPasswordSpecialChar = "Your password must include at least one special symbol.";

  // $account = new BehaviorSubject<IAccount | null>(
  //     {
  //       "id": new Date().getTime(),
  //       "firstName": "Dontavious",
  //       "lastName": "Green",
  //       "userId": "DontaviousG2022",
  //       "password": "password123",
  //       "emailAddress": "green.dontavious@gmail.com"
  //     }
  // );

  // const account: IAccount = {
  //       id: uuidv4(),
  //       firstName: .firstName,
  //       lastName: .lastName,
  //       userId: .userId,
  //       password: .password,
  //       emailAddress: .emailAddress
  //   }

  loginUser(form: ILoginForm){

  }

  constructor() { }

  //Put Interface and form data together
  registerForms(registrationForm: IRegistrationForm) {

    //email length is less than 5, missing @ or "." symbols send an error to user
    if (registrationForm.email.length < 5) {
      this.$emailError.next(this.RegErrorEmaillength);

    }
    if (!registrationForm.email.includes('@')) {
      this.$email2Error.next(this.RegErrorEmailAtSymbol);

    }
    if (!registrationForm.email.includes('.')) {
      this.$email3Error.next(this.RegErrorEmailDotSymbol);

    }
    //first name length is less than 0 end an error to user
    if (registrationForm.firstName.length < 1) {
      this.$firstNameError.next(this.RegErrorFirstName);

    }
    //password length less than 0 send an error to user
    if (registrationForm.lastName.length < 1) {
      this.$lastNameError.next(this.RegErrorLastName);

    }
    //if username length less than 0 send an error to user
    if (registrationForm.userName.length < 1) {
      this.$userNameError.next(this.RegErrorUserNameMinLength);

    }
    //check to see if field is empty if so return an error
    if (registrationForm.password.length < 1) {
      this.$passwordError.next(this.RegErrorPasswordMinLength);

    }
    //check to see if password meet minimum length if not return an error
    if (registrationForm.password.length < 5) {
      this.$password2Error.next(this.RegErrorPasswordShort);

    }
    //check to see if password is too long if so return this error
    if (registrationForm.password.length > 15) {
      this.$password3Error.next(this.RegErrorPasswordMaxLength);
      return;
    }
    // //check to see if password contain one UPPER case char
    // if (registrationForm.password.match() > A-Z) {
    //   this.$password4Error.next(this.RegErrorPasswordMaxLength);
    //   return;
    // }
    // //check to see if password contain at least one lower case char
    // if (registrationForm.password.length > a-z) {
    //   this.$password4Error.next(this.RegErrorPasswordMaxLength);
    //   return;
    // }

    //add special characters requirements for password
    // if (registrationForm.password.includes('!,@')) {
    //   this.$password5Error.next(this.RegErrorPasswordMaxLength);
    //   return;
    // }
  }
}
