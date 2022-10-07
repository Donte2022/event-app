import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  getContacts() {
    this.httpClient.get("http://localhost:3000/Contacts");


  }

  getEvents() {
    this.httpClient.get("http://localhost:3000/Events");
  }

  createEvent() {

  }


}
