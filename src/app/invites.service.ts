import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitesService {

  $manageInvites = new BehaviorSubject<boolean>(false);
  $createNewEvents = new BehaviorSubject<boolean>(false);
  $isViewingMainPage = new BehaviorSubject<boolean>(false);
  $isUpdatingEvent = new BehaviorSubject<boolean>(false);
  $isupdatingInvite = new BehaviorSubject<boolean>(false);


  manageInvites() {
  }

  
  
  constructor() { }
}
