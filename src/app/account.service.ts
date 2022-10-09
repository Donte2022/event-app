import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAccount} from "./Interface/IAccount";
import {v4 as uuidv4} from 'uuid';
import {ILoginForm} from "./Interface/ILoginForm";
import {IRegistrationForm} from "./Interface/IRegistrationForm";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //Tells the app root to switch to the registration page when the join btn is clicked
  $creatingNewUser = new BehaviorSubject<boolean>(false);

  //Error messages for Registration
  $firstNameError = new BehaviorSubject<string | null>(null);
  $lastNameError = new BehaviorSubject<string | null>(null);
  $userNameError = new BehaviorSubject<string | null>(null);
  $passwordError = new BehaviorSubject<string | null>(null);
  $password2Error = new BehaviorSubject<string | null>(null);
  $password3Error = new BehaviorSubject<string | null>(null);
  //$password4Error = new BehaviorSubject<string | null>(null);
  //$password5Error = new BehaviorSubject<string | null>(null);
  //$password6Error = new BehaviorSubject<string | null>(null);
  $email0Error = new BehaviorSubject<string | null>(null);
  $emailError = new BehaviorSubject<string | null>(null);
  $email2Error = new BehaviorSubject<string | null>(null);
  $email3Error = new BehaviorSubject<string | null>(null);
  $RegErrorHttp = new BehaviorSubject<string | null>(null);

  private RegErrorEmailEmpty = "You must include an email address."
  private RegErrorEmaillength = "Your email address must be greater than 5 characters long."
  private RegErrorEmailAtSymbol = "Your email address must contain an '@' symbol."
  private RegErrorEmailDotSymbol = "Your email address must contain an '.' symbol."
  private RegErrorFirstName = "You must include a first name.";
  private RegErrorLastName = "You must include a last name.";
  private RegErrorUserNameMinLength = "You must include a username.";
  private RegErrorPasswordMinLength = "You must include a password.";
  private RegErrorPasswordShort = "Your password must be at least 5 characters in length.";
  private RegErrorPasswordMaxLength = "Your password must not contain no more than 15 characters total.";
  //private RegErrorPasswordUpperChar = "Your password must include at least one Upper case.";
  //private RegErrorPasswordLowerChar = "Your password must include at least one lower case.";
  //private RegErrorPasswordSpecialChar = "Your password must include at least one special symbol.";
  private RegHttpErrorMessage = "Unable to create your account";
  private RegHttpSuccessMessage = "Account Created! Welcome to Event Organiser.";


  //Takes data from this and create a new account in json database

  $account = new BehaviorSubject<IAccount | null>(
      {
        "id": "0",
        "firstName": "Dontavious",
        "lastName": "Green",
        "userId": "DontaviousG2022",
        "password": "password123",
        "emailAddress": "green.dontavious@gmail.com"
      }
  );



  loginUser(form: ILoginForm){

  }

  constructor(private httpService: HttpService) {

  }

  //Put Interface and form data together
  registerForms(registrationForm: IRegistrationForm) {

    //check to see if email field is blank
    if (registrationForm.email.length < 1) {
      this.$email0Error.next(this.RegErrorEmailEmpty);

    }

      //check to see if email is less than 5 characters long
    if (registrationForm.email.length < 5) {
      this.$emailError.next(this.RegErrorEmaillength);

    }
    //check for special character in email address
    if (!registrationForm.email.includes('@')) {
      this.$email2Error.next(this.RegErrorEmailAtSymbol);

    }
    //check if email contain the period in address
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

    } else

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
    //   this.$password4Error.next(this.RegErrorPasswordUpperChar);
    //   return;
    // }

    // //check to see if password contain at least one lower case char
    // if (registrationForm.password.length > a-z) {
    //   this.$password5Error.next(this.RegErrorPasswordLowerChar);
    //   return;
    // }

    //add special characters requirements for password
    // if (registrationForm.password.includes('!,@')) {
    //   this.$password6Error.next(this.RegErrorPasswordSpecialChar);
    //   return;
    // }

    //Validation check to see if the account already exist
    //this.httpService.findAccount() {
    // }

      // create account after passing validation chk
    const account: IAccount = {
          id: uuidv4(),
          firstName: registrationForm.firstName,
          lastName: registrationForm.lastName,
          userId: registrationForm.userName,
          password: registrationForm.password,
          emailAddress: registrationForm.email
      }
          this.httpService.registerAccount(account).subscribe({
          next: (account) => {
            console.log(account)
            this.$RegErrorHttp.next(this.RegHttpSuccessMessage)
          //this.$account.next(account);
        },
          error: (error) => {
          console.error(error)
          this.$RegErrorHttp.next(this.RegHttpErrorMessage)
        },
      });
    }

}
