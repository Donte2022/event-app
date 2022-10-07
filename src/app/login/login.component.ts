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

  constructor(private httpService: HttpService) {
      this.httpService.getAccounts().subscribe((data) => {
          console.log(data) })
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
