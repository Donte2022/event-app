import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvents } from './Interface/IEvents';

@Injectable({
  providedIn: 'root'
})
export class EventsService {



  
  newEvent(eventForm: IEvents) {

    if (eventForm.eventName.length < 1) {
      this.$email0Error.next(this.RegErrorEmailEmpty);
    } else if
    (eventForm.eventName.length > 1) {
      this.$email0Error.next(this.RegValidEmailEmpty);

      if (eventForm.meetingDate === null) {
        this.$email0Error.next(this.RegErrorEmailEmpty);
      } else if
      (eventForm.meetingDate === ) {
        this.$email0Error.next(this.RegValidEmailEmpty);

      if (eventForm.eventTimeStart === null) {
        this.$email0Error.next(this.RegErrorEmailEmpty);
      } else if
      (eventForm.eventTimeStart === ) {
        this.$email0Error.next(this.RegValidEmailEmpty);

        if (eventForm.eventTimeEnd === null) {
          this.$email0Error.next(this.RegErrorEmailEmpty);
        } else if
        (eventForm.eventTimeEnd === ) {
          this.$email0Error.next(this.RegValidEmailEmpty);

        if (eventForm.location.length < 1) {
          this.$email0Error.next(this.RegErrorEmailEmpty);
        } else if
        (eventForm.location.length > 1) {
          this.$email0Error.next(this.RegValidEmailEmpty);

          if (eventForm.contactPersonName.length < 1) {
            this.$email0Error.next(this.RegErrorEmailEmpty);
          } else if
          (eventForm.contactPersonName.length > 1) {
            this.$email0Error.next(this.RegValidEmailEmpty);

            if (eventForm.contactPersonNumber === null) {
              this.$email0Error.next(this.RegErrorEmailEmpty);
            } else if
            (eventForm.contactPersonNumber.length > 1) {
              this.$email0Error.next(this.RegValidE

          if (eventForm.contactPersonEmail.length > 1) {
            this.$email0Error.next(this.RegErrorEmailEmpty);
          } else if
          (eventForm.contactPersonEmail.length < 1) {
            this.$email0Error.next(this.RegValidEmailEmpty);

            if (eventForm.costToAttend === null) {
              this.$email0Error.next(this.RegErrorEmailEmpty);
            } else if
            (eventForm.costToAttend === ) {
              this.$email0Error.next(this.RegValidEmailEmpty);

                    if (eventForm.notes.length < 1) {
                      this.$email0Error.next(this.RegErrorEmailEmpty);
                    } else if
                    (eventForm.notes.length > 1) {
                      this.$email0Error.next(this.RegValidEmailEmpty);

  }
                    if (eventForm.eventName.length > 1 &&
                        eventForm.meetingDate ===  &&
                        eventForm.eventTimeStart ===  &&
                        eventForm.eventTimeEnd ===  &&
                        eventForm.location.length > 1 &&
                        eventForm.contactPersonName.length > 1 &&
                        eventForm.contactPersonNumber.length > 1 &&
                        eventForm.contactPersonEmail.length < 1 &&
                        eventForm.costToAttend ===  &&
                        eventForm.notes.length > 1
                    )
                    {
                      const account: IEvents = {
                        id: uuidv4(),
                        eventName: eventForm.eventName,
                        meetingDate: eventForm.meetingDate,
                        eventTimeStart: eventForm.eventTimeStart,
                        eventTimeEnd: eventForm.eventTimeEnd,
                        location: eventForm.location,
                        contactPersonName: eventForm.contactPersonName,
                        contactPersonNumber: eventForm.contactPersonNumber,
                        contactPersonEmail: eventForm.contactPersonEmail,
                        costToAttend: eventForm.costToAttend,
                        notes: eventForm.notes,
                    }
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
