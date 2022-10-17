import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";
import {NgForm} from "@angular/forms";
import {AccountService} from "../account.service";
import {ILoginForm} from "../Interface/ILoginForm";
import { IEvents } from '../Interface/IEvents';
import { IAccount } from '../Interface/IAccount';
import {first, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoggedIn: boolean = false;
    isRegistering: boolean = false;

    //change any to specific type after creating a UI
    accounts:IAccount =
        {
            id:"",
            firstName: "",
            lastName: "",
            userId: "",
            password: "",
            emailAddress: ""
        };

    userId: string = "";
    password: string = "";

    //Login Error Messages
    loginUserError: string | null = null;
    passwordUserError: string | null = null;
    loginAccountError: string | null = null;

    //Login data from user
    httpLoginUserError: string | null = null;

    onDestroy = new Subject();
    
  constructor(private httpService: HttpService,
              private accountService: AccountService) {

      //retrieve data from observable(promise)
      this.httpService.getAccounts().pipe(first()).subscribe( {
          //this func is executed if data is received
          next: (data) => {
              this.accounts = data;
          },
          //this func is executed if request fails
          error: (err) => {
              console.log(err)
              //this.errorMessagesServer = err;
          }
      })

      this.accountService.$userLoginError.pipe(takeUntil(this.onDestroy)).subscribe(
          userLoginError => this.loginUserError = userLoginError)

      this.accountService.$passwordLoginError.pipe(takeUntil(this.onDestroy)).subscribe(
          passwordLoginError => this.passwordUserError = passwordLoginError);
      
      this.accountService.$invalidLoginError.pipe(takeUntil(this.onDestroy)).subscribe(
          loginError => this.loginAccountError = loginError);
      
      this.accountService.$httpLoginError.pipe(takeUntil(this.onDestroy)).subscribe(
          httpErrorMessage => this.httpLoginUserError = httpErrorMessage);
  }

    ngOnDestroy(): void {
        this.onDestroy.next(null);
        this.onDestroy.complete();
    }
  
  ngOnInit(): void {
  }

    onJoinClick() {
      this.accountService.$creatingNewUser.next(true);
    }

    onLoginClick(loginForm: NgForm) {
      this.accountService.loginUser(
          loginForm.value as ILoginForm
      );  
    }
}
