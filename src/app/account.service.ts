import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAccount} from "./Interface/IAccount";
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // $account = new BehaviorSubject<IAccount | null>(
  //     {
  //       "id": new Date().getTime(),
  //       "firstName": "Dontavious",
  //       "lastName": "Green",
  //       "userId": "DontaviousG2022",
  //       "password": "password123",
  //       "emailAddress": "green.dontavious@gmail.com"
  //     }
  // );

  // const account: IAccount = {
  //       id: uuidv4(),
  //       firstName: .firstName,
  //       lastName: .lastName,
  //       userId: .userId,
  //       password: .password,
  //       emailAddress: .emailAddress
  //   }

  constructor() { }
}
