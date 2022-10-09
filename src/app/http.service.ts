import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccount} from "./Interface/IAccount";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }

  getAccounts() {
    //return an observable for data
    return this.httpClient.get("http://localhost:3000/Accounts");

  }

  registerAccount(IRegistrationForm: IAccount) {
    return this.httpClient.post(
        "http://localhost:3000/Accounts", IRegistrationForm)
      }

  getContacts() {
    this.httpClient.get("http://localhost:3000/Contacts");


  }

  getEvents() {
    this.httpClient.get("http://localhost:3000/Events");
  }

  createEvent() {

  }


}
