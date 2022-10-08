import { Component } from '@angular/core';
import {AccountService} from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dontavious-green-AngularPrj';

  isLoggedIn: boolean = false;
  NewUser: boolean = false;

  constructor(
      private accountService: AccountService) {

    //listen to when the 'join' btn is clicked
    //and switches the page
    this.accountService.$creatingNewUser.subscribe(
        creatingNewUser => {
          this.NewUser = creatingNewUser;
        });
  }
}