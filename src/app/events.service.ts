import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { IEvents } from './Interface/IEvents';
import {v4 as uuidv4} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  $createNewEvent = new BehaviorSubject<boolean>(false);
  $isViewingMainPage = new BehaviorSubject<boolean>(false);
  
  //Error messages for empty fields while creating an event
  $eventError = new BehaviorSubject<string | null>(null);
  $eventError2 = new BehaviorSubject<string | null>(null);
  $eventError3 = new BehaviorSubject<string | null>(null);
  $eventError4 = new BehaviorSubject<string | null>(null);
  $eventError5 = new BehaviorSubject<string | null>(null);
  
  //error messages for creating an event
  private eventNameError = "You must include a name for the event";
  private eventMeetingDateError = "You must include a meeting Date for the event";
  private eventimeStartError = "You must include a start time for your event";
  private eventTimeEndError = "You must include an end time for your event";
  private eventLocationError = "You must include a location for your event";

  //Event Validation fields
  private eventNameEmpty = null;
  private eventMeetingDateEmpty = null;
  private eventimeStartEmpty = null;
  private eventTimeEndEmpty = null;
  private eventLocationEmpty = null;
  
  //error and success message that is sent to user when a new event
  //that is created was a success or a failure
  $eventSuccessHttp = new BehaviorSubject<string | null>(null);
  $eventFailureHttp = new BehaviorSubject<string | null>(null);
  $clearEventSuccessMessage = new BehaviorSubject<string | null>(null);
  eventSuccessMessage = "Your event was created!"
  eventFailureMessage = "Sorry your event was not created. Please try again later."
  clearEventSuccessMessage = "";
  //function to create an event
  
  
  newEvent(eventForm: IEvents) {

    //conditions to check for empty fields in before creating the event
    if (eventForm.eventName.length < 1) {
      this.$eventError.next(this.eventNameError)
      this.$clearEventSuccessMessage.next(this.clearEventSuccessMessage);
      
    } else if 
      (eventForm.eventName.length > 1) {
        this.$eventError.next(this.eventNameEmpty);
      }
    
      if (eventForm.meetingDate === undefined) {
        this.$eventError2.next(this.eventMeetingDateError)
        this.$clearEventSuccessMessage.next(this.clearEventSuccessMessage);

      } else if
      (eventForm.meetingDate.length > 1) {
        this.$eventError2.next(this.eventMeetingDateEmpty)

      }

      if (eventForm.eventTimeStart.length < 1) {
        this.$eventError3.next(this.eventimeStartError)
        this.$clearEventSuccessMessage.next(this.clearEventSuccessMessage);

      } else if
      (eventForm.eventTimeStart.length > 1) {
        this.$eventError3.next(this.eventimeStartEmpty);
      }

        if (eventForm.eventTimeEnd.length < 1) {
          this.$eventError4.next(this.eventTimeEndError)
          this.$clearEventSuccessMessage.next(this.clearEventSuccessMessage);

        } else if
        (eventForm.eventTimeEnd.length > 1) {
          this.$eventError4.next(this.eventTimeEndEmpty);
        }

        if (eventForm.location.length <1) {
          this.$eventError5.next(this.eventLocationError)
          this.$clearEventSuccessMessage.next(this.clearEventSuccessMessage);

        } else if
        (eventForm.location.length > 1) {
          this.$eventError5.next(this.eventLocationEmpty)
          this.$clearEventSuccessMessage.next(this.clearEventSuccessMessage);
        }
 
                if 
                (eventForm.eventName.length > 1 &&
                eventForm.meetingDate !== null &&
                eventForm.eventTimeStart.length > 1 &&
                eventForm.eventTimeEnd.length > 1 &&
                eventForm.location.length > 1
            ) 
            {
              //Data from the form and IEvent interface used 
              //to create the event
              const account: IEvents = {
                id: uuidv4(),
                eventName: eventForm.eventName,
                meetingDate: eventForm.meetingDate,
                eventTimeStart: eventForm.eventTimeStart,
                eventTimeEnd: eventForm.eventTimeEnd,
                location: eventForm.location,
              }

              //Set of instructions to run if creating an event was succesful or a failure
            this.httpService.addNewEvent(account).subscribe({
              next: (account) => {
                //Send a confirmation message if event was created
                this.$eventSuccessHttp.next(this.eventSuccessMessage)
              },
              error: (error) => {
                //Send a message to the user if the event created was a failure
                this.$eventSuccessHttp.next(this.clearEventSuccessMessage)
              },
            });
            }
            return true;
          }

  switchToEventPage() {
    this.$createNewEvent.next(true);
    // this.$createInvites.next(false);
    this.$isViewingMainPage.next(false);
    
  }

  constructor(private httpService: HttpService) {

  }
}
