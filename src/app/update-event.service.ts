import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventService {

   $updateMyEvent = new BehaviorSubject<boolean>(false);
  $manageInvites = new BehaviorSubject<boolean>(false);
  $createNewEvents = new BehaviorSubject<boolean>(false);
  $lookAtEventList = new BehaviorSubject<boolean>(false);
  $updateMyInvite = new BehaviorSubject<boolean>(false);
  
  constructor() {
    
  }
  
  
}
