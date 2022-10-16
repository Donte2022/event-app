import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { IEvents } from './Interface/IEvents';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventService {

  updatedEventData: string = "";

  // $oldEventName: IEvents[] = [];
  $oldEventName = new BehaviorSubject<IEvents[]>([]);

  $isUpdatingEvent = new BehaviorSubject<boolean>(false);
  // $manageInvites = new BehaviorSubject<boolean>(false);
  $isCreatingEvent = new BehaviorSubject<boolean>(false);
  $isViewingMainPage = new BehaviorSubject<boolean>(false);
  // $updateMyInvite = new BehaviorSubject<boolean>(false);
  $updatedEventData = new BehaviorSubject<string | null>(null);

  updateThisEvent(eventInfo:any) {
    console.log("forwarding data")
    console.log(eventInfo)
    this.updatedEventData = eventInfo;
    console.log(this.updatedEventData)
    console.log(eventInfo)
    // @ts-ignore
    console.log(this.updatedEventData.eventName)

    // @ts-ignore
    this.$oldEventName = this.updatedEventData.eventName
    console.log(this.$oldEventName)
  }

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

  //Event Validation fields
  private eventNameEmpty = null;
  private eventMeetingDateEmpty = null;
  private eventimeStartEmpty = null;
  private eventTimeEndEmpty = null;
  private eventLocationEmpty = null;
  private eventContactNameEmpty = null;
  private eventContactNumberEmpty = null;
  private eventContactEmailEmpty = null;
  private eventCostEmpty = null;
  private eventNoteEmpty = null;

  //error messages for creating an event
  private eventNameError = "You must include a name for the event";
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
  eventSuccessMessage = "Your event was updated!"
  eventFailureMessage = "Sorry your event was not updated. Please try again later."


  //function to update an event
  sendUpdatedValues(eventForm:IEvents) {
    console.log ("sending updated event info to http")
    console.log(eventForm)
    console.log("email",eventForm.contactPersonEmail)
    console.log("number",eventForm.contactPersonNumber)
    console.log("eventName",eventForm.eventName)
    console.log("hostName",eventForm.contactPersonName)
    console.log("timeStart",eventForm.eventTimeStart)
    console.log("timeEnd",eventForm.eventTimeEnd)

    //conditions to check for empty fields in before creating the event
    if (eventForm.eventName.length < 1) {
      this.$eventError.next(this.eventNameError);
    } else if
    (eventForm.eventName.length > 1)
    {
      this.$eventError.next(this.eventNameEmpty);
    }

    if (eventForm.meetingDate === null) {
      this.$eventError2.next(this.eventMeetingDateError);
    } else if
    (eventForm.meetingDate !== null) {
      this.$eventError2.next(this.eventMeetingDateEmpty);
    }

    if (eventForm.eventTimeStart.length < 1) {
      this.$eventError3.next(this.eventimeStartError);
    } else if
    (eventForm.eventTimeStart.length < 1) {
      this.$eventError3.next(this.eventimeStartEmpty);
    }

    if (eventForm.eventTimeEnd.length < 1) {
      this.$eventError4.next(this.eventTimeEndError);
    } else if
    (eventForm.eventTimeEnd.length > 1) {
      this.$eventError4.next(this.eventTimeEndEmpty);
    }

    if (eventForm.location.length <1) {
      this.$eventError5.next(this.eventLocationError);
    } else if
    (eventForm.location.length > 1) {
      this.$eventError5.next(this.eventLocationEmpty);
    }

    if (eventForm.contactPersonName === null) {
      this.$eventError6.next(this.eventContactNameError);
    } else if
    (eventForm.contactPersonName !== null) {
      this.$eventError6.next(this.eventContactNameEmpty);
    }

    if (eventForm.contactPersonNumber === null) {
      this.$eventError7.next(this.eventContactNumberError)
      console.log(eventForm.contactPersonNumber);
    } else if
    (eventForm.contactPersonNumber !== null) {
      this.$eventError7.next(this.eventContactNumberEmpty);
    }

    if (typeof (eventForm.contactPersonEmail) === undefined) {

      console.log(typeof(eventForm.contactPersonEmail));
    } else if
    (eventForm.contactPersonEmail !== undefined) {
      this.$eventError8.next(this.eventContactEmailEmpty);
    }

    if (eventForm.costToAttend.length < 1) {
      this.$eventError9.next(this.eventCostError);
    } else if
    (eventForm.costToAttend.length > 1 ) {
      this.$eventError9.next(this.eventCostEmpty);
    }

    if (eventForm.notes.length <1 ) {
      this.$eventError0.next(this.eventNoteError);
    } else if
    (eventForm.notes.length < 1) {
      this.$eventError0.next(this.eventNoteEmpty);
      return false;

      //conditions to pass before updating the event
    }
    if
    (eventForm.eventName.length > 1 &&
        eventForm.meetingDate !== null &&
        eventForm.eventTimeStart.length > 1 &&
        eventForm.eventTimeEnd.length > 1 &&
        eventForm.location.length > 1 &&
        eventForm.contactPersonName !== null &&
        eventForm.contactPersonNumber !== null &&
        eventForm.contactPersonEmail !== null &&
        eventForm.costToAttend.length > 1 &&
        eventForm.notes.length > 1
    )
    {
      //Data from the form and IEvent interface used
      //to update the event
      const account: IEvents = {
        id: eventForm.id,
        eventName: eventForm.eventName,
        meetingDate: eventForm.meetingDate,
        eventTimeStart: eventForm.eventTimeStart,
        eventTimeEnd: eventForm.eventTimeEnd,
        location: eventForm.location,
        contactPersonName: eventForm.contactPersonName,
        contactPersonNumber: eventForm.contactPersonNumber,
        contactPersonEmail: eventForm.contactPersonEmail,
        costToAttend: eventForm.costToAttend,
        notes: eventForm.notes
      }

      //Set of instructions to run if creating an event was succesful or a failure
      this.httpService.updateSelectedEvent(eventForm).subscribe({
        next: (account) => {
          //Send a confirmation message if event was created
          this.$eventSuccessHttp.next(this.eventSuccessMessage)
          console.log("updated was successful")
          console.log(eventForm)
          console.log(eventForm.id)
        },
        error: (error) => {
          //Send a message to the user if the event created was a failure
          this.$eventFailureHttp.next(this.eventFailureMessage)
          console.log(eventForm)
          console.log(eventForm.id)
        },
      });
    }
    return true;
  }




  constructor(private httpService: HttpService) {

}
  
  
}
