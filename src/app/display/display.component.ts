import { Component, Input, OnInit } from '@angular/core';
import {first, pipe } from 'rxjs';
import { DisplayService } from '../display.service';
import { EventsService } from '../events.service';
import { HttpService } from '../http.service';
import { IEvents } from '../Interface/IEvents';
import { InvitesService } from '../invites.service';
import { UpdateEventService } from '../update-event.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  userInput: string = "";
  updatedEventList!: IEvents[];


  //Delete and Update Messages
  deleteFailMessage: string | null = null;
  deleteSuccessMessage: string | null = null;
  updateFailMessage: string | null = null;
  updateSuccessMessage: string | null = null;

  constructor(private httpService: HttpService,
              private eventService: EventsService,
              private inviteService: InvitesService,
              private displayService: DisplayService,
              private updateEventService: UpdateEventService) {

    // this.displayService.$deleteMyEventError.subscribe(
    //     deleteIdFail => this.deleteFailMessage = deleteIdFail);
    //
    // this.displayService.$deleteMyEventSuccess.subscribe(
    //     deleteIdSuccess => this.deleteSuccessMessage = deleteIdSuccess);

    // this.displayService.$updateMyEventFail.subscribe(
    //     $RegSuccessHttp => this.updateFailMessage = updateMy);
    //
    // this.displayService.$updateMyEventSuccess.subscribe(
    //     $RegErrorHttp => this.updateSuccessMessage = $RegErrorHttp);


    //retrieve data from observable(promise)
    this.httpService.getEvents()
    // pipe(first())
     .subscribe( {
      //this func is executed if data is received
      next: (data) => {
        console.log(data)
        this.updatedEventList = data;
        console.log(this.updatedEventList)
      },
      //this func is executed if request fails
      error: (error) => {
        console.log(error)
        //this.errorMessagesServer = err;
      }
    })



    //this.eventList = this.eventFromDatabase;
    // this.displayList = [...this.eventList]


  }

  ngOnInit(): void {
  }

  manageInvite(sendInvite:any) {
    console.log("Inviting others")
    console.log(sendInvite)
    this.inviteService.$isViewingMainPage.next(false),
    this.inviteService.$manageInvites.next(true);

  }

  updateEvent(updateThisEvent: any) {
    console.log("Updating event..")
    console.log(updateThisEvent)
    this.updateEventService.$isUpdatingEvent.next(true)
        this.updateEventService.$isViewingMainPage.next(false),
        this.updateEventService.$isCreatingEvent.next(false)
        // this.updateEventService.$manageInvites.next(false),
        // this.updateEventService.$updateMyInvite.next(false)
    // const updateUser = {
    //       id: parseInt(this.updatedUserInputId),
    //       eventName:
    //       meetingDate:
    // eventTimeStart:
    // eventTimeEnd:
    // location:
    // contactPersonName:
    // contactPersonNumber:
    // contactPersonEmail:
    // costToAttend:
    // notes:
    // }
    //
    // //pipe is used to put your subscription into the first func
    // //which takes the first piece of info back and unsubscribe afterwards
    // this.httpService.updateSelectedEvent(updateUser)
    // pipe(first()).subscribe({
    //   next: (updateData) => {
    //     console.log("Event updated!")
    //   },
    //   error: (error) => {
    //     console.log("Event update FAIL!")
    //   }
    // })
  }

  deleteEvent(deleteThisEvent:any) {
      console.log("deleting this event")
      console.log(deleteThisEvent)
     this.displayService.deleteMyEvent(deleteThisEvent);

  }


  deleteInvite(deleteThisInvite:any) {
    console.log("deleting invite")
    console.log(deleteThisInvite)
  }

  updateInvite(updateThisInvite:any) {
    console.log("updating invite")
    console.log(updateThisInvite)
    // this.inviteService.$isViewingMainPage.next(false),
    //     this.inviteService.$isupdatingInvite.next(true)



  }

  deleteInvitation(deleteThisInvitation:any) {
    console.log("deleting invitation")
    console.log(deleteThisInvitation)
    this.displayService.deleteMyInvitation(deleteThisInvitation);

  }
}
