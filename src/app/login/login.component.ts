import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";
import {NgForm} from "@angular/forms";
import {AccountService} from "../account.service";
import {ILoginForm} from "../Interface/ILoginForm";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoggedIn: boolean = false;
    isRegistering: boolean = false;
    //change any to specific type after creating a UI
    accounts: any = null;
    userName: string = "";
    password: string = "";
    //Login Error Messages
    loginUserError: string | null = null;
    passwordUserError: string | null = null;
    loginAccountError: string | null = null;
    //Login data from user
    httpLoginUserError: string | null = null;

  constructor(private httpService: HttpService,
              private accountService: AccountService) {

      //retrieve data from observable(promise)
      this.httpService.getAccounts().subscribe( {
          //this func is executed if data is received
          next: (data) => {
                console.log(data)
              this.accounts = data;
          },
          //this func is executed if request fails
          error: (err) => {
              console.log(err)
              //this.errorMessagesServer = err;
          }
      })

      this.accountService.$userLoginError.subscribe(
          userLoginError => this.loginUserError = userLoginError)


      this.accountService.$passwordLoginError.subscribe(
          passwordLoginError => this.passwordUserError = passwordLoginError);
      
      this.accountService.$invalidLoginError.subscribe(
          loginError => this.loginAccountError = loginError);
      
      this.accountService.$httpLoginError.subscribe(
          httpErrorMessage => this.httpLoginUserError = httpErrorMessage);

  }

  ngOnInit(): void {
  }

    onJoinClick() {
      this.accountService.$creatingNewUser.next(true);
    console.log("Joining EO")

    }

    onLoginClick(loginForm: NgForm) {
      console.log(loginForm.value)
      this.accountService.loginUser(
          loginForm.value as ILoginForm
      );
        console.log("click")
    }
    
    testBtn() {
      console.log("test")
    }
}
