import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subject, takeUntil } from 'rxjs';
import {AccountService} from "../account.service";
import {IRegistrationForm} from "../Interface/IRegistrationForm";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //Error messages for registration field
  firstNameErrorMessages: string | null = null;
  lastNameErrorMessages: string | null = null;
  userIdErrorMessages: string | null = null;
  email0NameErrorMessages: string | null = null;
  emailNameErrorMessages: string | null = null;
  email2NameErrorMessages: string | null = null;
  email3NameErrorMessages: string | null = null;
  passwordErrorMessages: string | null = null;
  password2ErrorMessages: string | null = null;
  password3ErrorMessages: string | null = null;
  password4ErrorMessages: string | null = null;
  registerNewUserMessageSuccess: string | null = null;
  registerNewUserMessageFailure: string | null = null;
  registerClearSuccessMess: string | null = null;

  onDestroy = new Subject();

  constructor(private accountService: AccountService) {

    this.accountService.$firstNameError.pipe(takeUntil(this.onDestroy)).subscribe(
        firstNameRegError => this.firstNameErrorMessages = firstNameRegError);

    this.accountService.$lastNameError.pipe(takeUntil(this.onDestroy)).subscribe(
        lastNameRegError => this.lastNameErrorMessages = lastNameRegError);

    this.accountService.$email0Error.pipe(takeUntil(this.onDestroy)).subscribe(
        email0RegError => this.email0NameErrorMessages = email0RegError);

    this.accountService.$emailError.pipe(takeUntil(this.onDestroy)).subscribe(
        emailRegError => this.emailNameErrorMessages = emailRegError);

    this.accountService.$email2Error.pipe(takeUntil(this.onDestroy)).subscribe(
        email2RegError => this.email2NameErrorMessages = email2RegError);

    this.accountService.$email3Error.pipe(takeUntil(this.onDestroy)).subscribe(
        email3RegError => this.email3NameErrorMessages = email3RegError);

    this.accountService.$userIdError.pipe(takeUntil(this.onDestroy)).subscribe(
        userIdRegError => this.userIdErrorMessages = userIdRegError);

    this.accountService.$passwordError.pipe(takeUntil(this.onDestroy)).subscribe(
        passwordRegError => this.passwordErrorMessages = passwordRegError);

    this.accountService.$password2Error.pipe(takeUntil(this.onDestroy)).subscribe(
        password2RegError => this.password2ErrorMessages = password2RegError);

    this.accountService.$password3Error.pipe(takeUntil(this.onDestroy)).subscribe(
        password3RegError => this.password3ErrorMessages = password3RegError);

    this.accountService.$RegSuccessHttp.pipe(takeUntil(this.onDestroy)).subscribe(
        $RegSuccessHttp => this.registerNewUserMessageSuccess = $RegSuccessHttp);

    this.accountService.$RegErrorHttp.pipe(takeUntil(this.onDestroy)).subscribe(
        $RegErrorHttp => this.registerNewUserMessageFailure = $RegErrorHttp);

    this.accountService.$RegSuccessHttp.pipe(takeUntil(this.onDestroy)).subscribe(
        RegSuccessClearMessage => this.registerNewUserMessageSuccess = RegSuccessClearMessage);
  }

  ngOnDestroy(): void {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }
    
  
  ngOnInit(): void {
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

  backToLogin() {
    this.accountService.$creatingNewUser.next(false);
  }
}
