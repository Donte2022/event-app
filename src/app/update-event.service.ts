import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventService {

  $isUpdatingEvent = new BehaviorSubject<boolean>(false);
  // $manageInvites = new BehaviorSubject<boolean>(false);
  $isCreatingEvent = new BehaviorSubject<boolean>(false);
  $isViewingMainPage = new BehaviorSubject<boolean>(false);
  // $updateMyInvite = new BehaviorSubject<boolean>(false);
  
  constructor() {
    
  }
  
  
}
