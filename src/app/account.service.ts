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

  //Error Message for Login
  $userLoginError = new BehaviorSubject<string | null>(null);
  $passwordLoginError = new BehaviorSubject<string | null>(null);
  $invalidLoginError = new BehaviorSubject<string | null>(null);
  $httpLoginError = new BehaviorSubject<string | null>(null);

  //Error messages for Registration
  $firstNameError = new BehaviorSubject<string | null>(null);
  $lastNameError = new BehaviorSubject<string | null>(null);
  $userIdError = new BehaviorSubject<string | null>(null);
  $passwordError = new BehaviorSubject<string | null>(null);
  $password2Error = new BehaviorSubject<string | null>(null);
  $password3Error = new BehaviorSubject<string | null>(null);
  //$password4Error = new BehaviorSubject<string | null>(null);
  //$password6Error = new BehaviorSubject<string | null>(null);
  $email0Error = new BehaviorSubject<string | null>(null);
  $emailError = new BehaviorSubject<string | null>(null);
  $email2Error = new BehaviorSubject<string | null>(null);
  $email3Error = new BehaviorSubject<string | null>(null);
  $RegSuccessHttp = new BehaviorSubject<string | null>(null);
  $RegErrorHttp = new BehaviorSubject<string | null>(null);

  //Login Error Messages
  private UserLogingError = "You must include a user ID";
  private PasswordLoginError = "You must include a password";
  private userLoginValidError = "";
  private passwordLoginValidError = "";
  private invalidUserName = "Your username was not found. Please try again";
  private invalidPassword = "Your password is incorrect. Please try again";
  private invalidLogin = "Unable to login account. Please try again later";
  private invalidCreds  ="Your password did not match your userID.";

  //Registration Error Messages
  private RegErrorEmailEmpty = "You must include an email address.";
  private RegErrorEmaillength = "Your email address must be greater than 5 characters long.";
  private RegErrorEmailAtSymbol = "Your email address must contain an '@' symbol.";
  private RegErrorEmailDotSymbol = "Your email address must contain an '.' symbol.";
  private RegErrorFirstName = "You must include a first name.";
  private RegErrorLastName = "You must include a last name.";
  private RegErrorUserNameMinLength = "You must include a username.";
  private RegErrorPasswordShort = "Your password must be at least 5 characters in length.";
  private RegErrorPasswordMaxLength = "Your password must not contain no more than 15 characters total.";
  //private RegErrorPasswordUpperChar = "Your password must include at least one Upper case.";
  //private RegErrorPasswordLowerChar = "Your password must include at least one lower case.";
  //private RegErrorPasswordSpecialChar = "Your password must include at least one special symbol.";
  private RegHttpSuccessMessage = "Account Created! Welcome to Event Organiser!";
 private RegHttpErrorMessage = "Unable to login into your account please try again.";


  //Registration validated fields
  private RegValidEmailEmpty = null;
  private RegValidEmaillength = null;
  private RegValidEmailAtSymbol = null;
  private RegValidEmailDotSymbol = null;
  private RegValidFirstName = null;
  private RegValidLastName = null;
  private RegValidUserNameMinLength = null;
  private RegValidPasswordShort = null;
  private RegValidPasswordMaxLength = null;
  //private RegValidPasswordUpperChar = null;
  //private RegValidPasswordLowerChar = null;
  //private RegValidPasswordSpecialChar = null;
  private RegValidHttpSuccessMessage = null;
  private RegValidHttpErrorMessage = null;



  $account = new BehaviorSubject<IAccount | null>(
      null);
  
  //Shortcut to stay logged in to work on the prj
  //     {
  //       "id": "0",
  //       "firstName": "Dontavious",
  //       "lastName": "Green",
  //       "userId": "DontaviousG2022",
  //       "password": "password123",
  //       "emailAddress": "green.dontavious@gmail.com"
  //     }
  // );




  constructor(private httpService: HttpService) {
  }

  logOutUser() {
    this.$account.next(null);
  }

  //username and password verification
  loginUser(loginForm: ILoginForm) {

    //upon login btn click perform field validation
    if (loginForm.userId.length < 1) {
      this.$userLoginError.next(this.UserLogingError);
    } else if
    (loginForm.userId.length > 1) {
      this.$userLoginError.next(this.userLoginValidError);
    }
    //Check to see if password is blank during login
    if (loginForm.password.length < 1) {
      this.$passwordLoginError.next(this.PasswordLoginError);
    } else if
    (loginForm.password.length > 1) {
      this.$passwordLoginError.next(this.passwordLoginValidError);
    // Run code below if no errors were found during login
    } if (
        loginForm.userId.length > 1 &&
        loginForm.password.length > 1
    )
      //Look for account in json database
    this.httpService.findUserAccounts(loginForm.userId).subscribe({
      next: (accountList) => {

        const foundaccounts = accountList.find(
            account =>  account.userId === loginForm.userId
        );
          if (!foundaccounts) {
          this.$userLoginError.next(this.invalidCreds);
          return;
        }

        //login user in
         this.$account.next(foundaccounts);

      },
      //this func is executed if request fails
      error: (error) => {
        //send an error message if login was an http failure
        this.$httpLoginError.next(this.RegHttpErrorMessage)
      }
      });

  }


  //Put Interface and form data together
  registerForms(registrationForm: IRegistrationForm) {

    //check to see if email field is blank
    if (registrationForm.email.length < 1) {
      this.$email0Error.next(this.RegErrorEmailEmpty);
    } else if
    (registrationForm.email.length > 1) {
      this.$email0Error.next(this.RegValidEmailEmpty);
    }
    //first name length is less than 0 end an error to user
    if (registrationForm.firstName.length < 1) {
      this.$firstNameError.next(this.RegErrorFirstName);
    } else if
    (registrationForm.firstName.length > 1) {
      this.$firstNameError.next(this.RegValidFirstName);
    }

    //password length less than 0 send an error to user
    if (registrationForm.lastName.length < 1) {
      this.$lastNameError.next(this.RegErrorLastName);
    } else if
    (registrationForm.lastName.length > 1) {
      this.$lastNameError.next(this.RegValidLastName);
    }

    //if username length less than 0 send an error to user
    if (registrationForm.userId.length < 1) {
      this.$userIdError.next(this.RegErrorUserNameMinLength);
    } else if
    (registrationForm.userId.length > 1) {
      this.$userIdError.next(this.RegValidUserNameMinLength);
    }
    //check to see if email is less than 5 characters long
    if (registrationForm.email.length <= 4) {
      this.$emailError.next(this.RegErrorEmaillength);
    } else if
    (registrationForm.email.length >= 4) {
      this.$emailError.next(this.RegValidEmaillength);
    }
    //check for special character in email address
    if (!registrationForm.email.includes('@')) {
      this.$email2Error.next(this.RegErrorEmailAtSymbol);
    } else if
    (registrationForm.email.includes('@')) {
      this.$email2Error.next(this.RegValidEmailAtSymbol);
    }
    //check if email contain the period in address
    if (!registrationForm.email.includes('.')) {
      this.$email3Error.next(this.RegErrorEmailDotSymbol);
    } else if
    (registrationForm.email.includes('.')) {
      this.$email3Error.next(this.RegValidEmailDotSymbol);
    }
    //check to see if password meet minimum length if not return an error
    if (registrationForm.password.length <= 5) {
      this.$password2Error.next(this.RegErrorPasswordShort);
    } else if
    (registrationForm.password.length >= 5) {
      this.$password2Error.next(this.RegValidPasswordShort);
    }
    //check to see if password is too long if so return this error
    if (registrationForm.password.length >= 15) {
      this.$password3Error.next(this.RegErrorPasswordMaxLength);
    } else if
    (registrationForm.password.length <= 15) {
      this.$password3Error.next(this.RegValidPasswordMaxLength);

    // //check to see if password contain one UPPER case char
    // if (registrationForm.password.match() > A-Z) {
    //   this.$password4Error.next(this.RegErrorPasswordUpperChar);
    // }

    // //check to see if password contain at least one lower case char
    // if (registrationForm.password.length > a-z) {
    //   this.$password5Error.next(this.RegErrorPasswordLowerChar);
    // }

    //add special characters requirements for password
    // if (registrationForm.password.includes('!,@')) {
    //   this.$password6Error.next(this.RegErrorPasswordSpecialChar);
    // }

    //Validation check to see if the account already exist
    //this.httpService.findAccount() {
    // }

      //Check for all fields are error free, if so it creates the account
    }  if   //Check for all fields are error free, if so it creates the account
        (registrationForm.email.length > 1 &&
        registrationForm.firstName.length > 1 &&
        registrationForm.lastName.length > 1 &&
        registrationForm.userId.length > 1 &&
        registrationForm.email.length >= 4 &&
        registrationForm.email.includes('@') &&
        registrationForm.email.includes('.') &&
        registrationForm.password.length >= 5 &&
        registrationForm.password.length <= 15
    )
    {
      const account: IAccount = {
        id: uuidv4(),
        firstName: registrationForm.firstName,
        lastName: registrationForm.lastName,
        userId: registrationForm.userId,
        password: registrationForm.password,
        emailAddress: registrationForm.email
      }

      //Set of instructions to run if registration was a success or failure
      this.httpService.registerAccount(account).subscribe({
        next: (account) => {
          //Send a confirmation message if registration was successful
          this.$RegSuccessHttp.next(this.RegHttpSuccessMessage)
        },
        error: (error) => {
          //Send an error message if registration was a failure
          this.$RegErrorHttp.next(this.RegHttpErrorMessage)
        },
      });
    }
     return true;
  }
}