import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  
  newEvent() {
    // this.selectedEvent = {
    //   id: "",
    //   eventName: "",
    //   meetingDate: new Date(),
    //   eventTimeStart: "",
    //   eventTimeEnd: number;
    //   location: string;
    //   contactPersonName: string;
    //   contactPersonNumber: number;
    //   contactPersonEmail: string;
    //   costToAttend: number;
    //   notes: string;
    // }
  }
  
  updateEvent(id: any) {
   // const index = this.eventList.findIndex(event => 
   //     event.id === updatedEvent.id);
   // if (index === -1) {
   //   console.error ("unable to find updatedEvent");
   //   return
   // }
   //  this.eventList[index] = updatedEvent;
   // this.$eventList.next(this.eventList)
  
  }
  
  deleteEvent(id: string) {
      // this.eventList = this.eventList.filter(
      //     event => event.id !== id
      // );
  }

  //tells the root comp to switch from main to event page
  $createNewEvent = new BehaviorSubject<boolean>(false);
  $createInvites = new BehaviorSubject<boolean>(false);
  $viewEventsandInvites = new BehaviorSubject<boolean>(false);
  
  //error messages for creating new event

  switchToEventPage() {
    this.$createNewEvent.next(true);
    this.$createInvites.next(false);
    this.$viewEventsandInvites.next(false);
    

  }

  constructor() { }
}
