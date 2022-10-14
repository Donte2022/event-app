import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { UpdateEventService } from './update-event.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {




  $manageInvites = new BehaviorSubject<boolean>(false);
  $createNewEvents = new BehaviorSubject<boolean>(false);
  $lookAtEventList = new BehaviorSubject<boolean>(false);
  $isUpdatingEvent = new BehaviorSubject<boolean>(false);


  //update and delete message from http
  $deleteMyEventError = new BehaviorSubject<string | null>(null);
  $deleteMyEventSuccess = new BehaviorSubject<string | null>(null);
  $updateMyEventFail = new BehaviorSubject<string | null>(null);
  $updateMyEventSuccess = new BehaviorSubject<string | null>(null);
  $deleteMyInvitationSuccess = new BehaviorSubject<string | null>(null);
  $deleteMyInvitationError = new BehaviorSubject<string | null>(null);
  
  private deleteIdFail = "Event failed to delete. Please try again later";
  private deleteIdSuccess = "Event Deleted!";
  private updateIdFail = "Event failed to update. Please try again later.";
  private updateIdSuccess = "Event updated!";

  
  deleteMyEvent(deleteThisEvent:any) {
    console.log(deleteThisEvent)
    // //convert text to number
    // const deleteEventId = parseInt(listOfEvents.id);
    // // //returns an observable
    this.httpService.deleteSelectedEvent(deleteThisEvent)
        .subscribe({
          next: (deleteEventSuccess) => {
            console.log("Event deleted!")
            console.log(deleteEventSuccess)
            this.$deleteMyEventSuccess.next(this.deleteIdSuccess)
          },
          error: (deleteEventError) => {
            console.log("Event delete FAIL")
            console.log(deleteEventError)
            this.$deleteMyEventError.next(this.deleteIdFail)
          }
        })
    
  }

  deleteMyInvitation(deleteThisInvitation:any) {
    this.httpService.deleteSelectedInvitation(deleteThisInvitation)
        .subscribe({
          next: (deleteThisInvitationSuccess) => {
            console.log("Invitation Deleted!")
            console.log(deleteThisInvitationSuccess)
            this.$deleteMyInvitationSuccess.next(this.deleteIdSuccess)
          },
          error: (deleteThisInvitationError) => {
            console.log("Invitation Delete Fail")
            console.log(deleteThisInvitationError)
            this.$deleteMyInvitationError.next(this.deleteIdFail)
          }
        })
  }

  
  constructor(private httpService: HttpService,
              private updateEventService: UpdateEventService) {
    
  }
}
