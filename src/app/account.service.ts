import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAccount} from "./Interface/IAccount";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  $account = new BehaviorSubject<IAccount | null>(
      {
        "id": new Date().getTime(),
        "firstName": "Dontavious",
        "lastName": "Green",
        "userId": "DontaviousG2022",
        "password": "password123",
        "emailAddress": "green.dontavious@gmail.com"
      }
  );

  constructor() { }
}
