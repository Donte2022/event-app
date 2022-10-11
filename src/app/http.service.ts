import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccount} from "./Interface/IAccount";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  

  constructor(private httpClient: HttpClient) {

  }

  findUserAccounts(userId: string) {
    //return an observable for data to retrieve usernames for login validation
    return this.httpClient.get(
        "http://localhost:3000/Accounts?userId=" + `${userId}`,
        ) as Observable<IAccount[]>;
  }
  
  getAccounts() {
    //return an observable for data
    return this.httpClient.get("http://localhost:3000/Accounts",
        )as Observable<IAccount>;

  }

  registerAccount(IRegistrationForm: IAccount) {
    return this.httpClient.post(
        "http://localhost:3000/Accounts", 
        IRegistrationForm
        ) as Observable<IAccount>;
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
