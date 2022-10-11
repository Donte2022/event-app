import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  //tells the root comp to switch from main to event page
  $createNewEvent = new BehaviorSubject<boolean>(false);
  $createInvites = new BehaviorSubject<boolean>(false);
  $viewEventsandInvites = new BehaviorSubject<boolean>(false);
  
  //error messages for creating new event

  newEvent() {
    console.log("creating new event")
    this.$createNewEvent.next(true);
    this.$createInvites.next(false);
    this.$viewEventsandInvites.next(false);
    

  }

  constructor() { }
}
