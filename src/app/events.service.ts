import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { IEvents } from './Interface/IEvents';
import {v4 as uuidv4} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  //Error messages for empty fields while creating an event
  $eventError = new BehaviorSubject<string | null>(null);
  $eventError2 = new BehaviorSubject<string | null>(null);
  $eventError3 = new BehaviorSubject<string | null>(null);
  $eventError4 = new BehaviorSubject<string | null>(null);
  $eventError5 = new BehaviorSubject<string | null>(null);
  $eventError6 = new BehaviorSubject<string | null>(null);
  $eventError7 = new BehaviorSubject<string | null>(null);
  $eventError8 = new BehaviorSubject<string | null>(null);
  $eventError9 = new BehaviorSubject<string | null>(null);
  $eventError0 = new BehaviorSubject<string | null>(null);

  //error messages for creating an event
  private eventNameError = "You must include an event name";
  private eventMeetingDateError = "You must include a meeting Date for the event";
  private eventimeStartError = "You must include a start time for your event";
  private eventTimeEndError = "You must include an end time for your event";
  private eventLocationError = "You must include a location for your event";
  private eventContactNameError = "You must include the host name";
  private eventContactNumberError = "You must include the host number";
  private eventContactEmailError = "You must include the host email address";
  private eventCostError = "You must include a cost for the event";
  private eventNoteError = "you must include a note about the event";

  //error and success message that is sent to user when a new event
  //that is created was a success or a failure
  $eventSuccessHttp = new BehaviorSubject<string | null>(null);
  $eventFailureHttp = new BehaviorSubject<string | null>(null);
  eventSuccessMessage = "Your event was created!"
  eventFailureMessage = "Sorry your event was not created. Please try again later."

  //function to create an event
  newEvent(eventForm: IEvents) {

      //conditions to check for empty fields in before creating the event
    if (eventForm.eventName.length < 1) {
      this.$eventError.next(this.eventNameError);
    } else if
    (eventForm.eventName.length > 1) {
      this.$eventError.next(this.eventNameError);
    }
      if (eventForm.meetingDate === null) {
        this.$eventError2.next(this.eventMeetingDateError);
      } else if
      (eventForm.meetingDate !== null) {
        this.$eventError2.next(this.eventMeetingDateError);
        }
      if (eventForm.eventTimeStart === null) {
        this.$eventError3.next(this.eventimeStartError);
      } else if
      (eventForm.eventTimeStart !== null) {
        this.$eventError3.next(this.eventimeStartError);
      }
        if (eventForm.eventTimeEnd === null) {
          this.$eventError4.next(this.eventTimeEndError);
        } else if
        (eventForm.eventTimeEnd !== null) {
          this.$eventError4.next(this.eventTimeEndError);
        }
        if (eventForm.location.length < 1) {
          this.$eventError5.next(this.eventLocationError);
        } else if
        (eventForm.location.length > 1) {
          this.$eventError5.next(this.eventLocationError);
        }
          if (eventForm.contactPersonName.length < 1) {
            this.$eventError6.next(this.eventContactNameError);
          } else if
          (eventForm.contactPersonName.length > 1) {
            this.$eventError6.next(this.eventContactNameError);
          }
            if (eventForm.contactPersonNumber === null) {
              this.$eventError7.next(this.eventContactNumberError);
            } else if
            (eventForm.contactPersonNumber !== null) {
              this.$eventError7.next(this.eventContactNumberError);
            }
            if (eventForm.contactPersonEmail.length > 1) {
              this.$eventError8.next(this.eventContactEmailError);
            } else if
            (eventForm.contactPersonEmail.length < 1) {
              this.$eventError8.next(this.eventContactEmailError);
            }
            if (eventForm.costToAttend === null) {
              this.$eventError9.next(this.eventCostError);
            } else if
            (eventForm.costToAttend !== null) {
              this.$eventError9.next(this.eventCostError);
            }
            if (eventForm.notes.length < 1) {
              this.$eventError0.next(this.eventNoteError);
            } else if
            (eventForm.notes.length > 1) {
              this.$eventError0.next(this.eventNoteError);

              //conditions to pass before creating the event
            }
            if (eventForm.eventName.length > 1 &&
                eventForm.meetingDate !== null &&
                eventForm.eventTimeStart !== null &&
                eventForm.eventTimeEnd !== null &&
                eventForm.location.length > 1 &&
                eventForm.contactPersonName.length > 1 &&
                eventForm.contactPersonNumber !== null &&
                eventForm.contactPersonEmail.length < 1 &&
                eventForm.costToAttend !== null &&
                eventForm.notes.length > 1
            ) {
              //Data from the form and IEvent interface used 
              //to create the event
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

              //Set of instructions to run if creating an event was succesful or a failure
            this.httpService.addNewEvent(account).subscribe({
              next: (account) => {
                //Send a confirmation message if event was created
                this.$eventSuccessHttp.next(this.eventSuccessMessage)
              },
              error: (error) => {
                //Send a message to the user if the event created was a failure
                this.$eventFailureHttp.next(this.eventFailureMessage)
              },
            });
            }
            return true;
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

  constructor(private httpService: HttpService) {

  }
}
