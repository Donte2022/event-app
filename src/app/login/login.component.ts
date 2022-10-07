import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";

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
    errorMessagesServer: string = "";


  constructor(private httpService: HttpService) {
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
              this.errorMessagesServer = err;
          }
      })
  }

  ngOnInit(): void {
  }

 onJoinClick() {
    console.log("Joining EO")

    }


    onLoginClick() {
      console.log("loggin in")
    }
}
