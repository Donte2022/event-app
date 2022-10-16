import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccount} from "./Interface/IAccount";
import { Observable } from 'rxjs';
import { IEvents } from './Interface/IEvents';

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
   return this.httpClient.get(
       "http://localhost:3000/Events",
       ) as Observable<IEvents[]>;
  }

  addNewEvent(eventForm: IEvents) {
    return this.httpClient.post(
        "http://localhost:3000/Events",
        eventForm
      ) as Observable<IEvents>
  }

  deleteSelectedEvent(deleteThisEvent:IEvents) {
    console.log(deleteThisEvent)
    return this.httpClient.delete(
        "http://localhost:3000/Events/" + deleteThisEvent,
    ) as Observable<IEvents[]>
  }


  updateSelectedEvent(eventForm:IEvents) {
    console.log(eventForm.id)
    return this.httpClient.put(
        "http://localhost:3000/Events/" + `${eventForm.id}`, {eventForm}
    ) as Observable<IEvents[]>
  }

  deleteSelectedInvitation(deleteThisInvitaion:any) {
    console.log(deleteThisInvitaion)
    return this.httpClient.delete(
        "http://localhost:3000/Events/" + deleteThisInvitaion,
    ) as Observable<IEvents[]>

  }

}
