import { Component, Input, OnInit } from '@angular/core';
import {first, pipe } from 'rxjs';
import { DisplayService } from '../display.service';
import { EventsService } from '../events.service';
import { HttpService } from '../http.service';
import { IEvents } from '../Interface/IEvents';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  userInput: string = "";

  updatedEventList!: IEvents[];

  constructor(private httpService: HttpService,
              private eventService: EventsService,
              private inviteService: InvitesService,
              private displayService: DisplayService ) {

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

  manageInvite() {
    console.log("Inviting others")
    this.inviteService.$lookAtEventList.next(false),
        this.inviteService.$manageInvites.next(true);

  }

  updateEvent() {
    console.log("Updating event..")
    this.displayService.$createNewEvents.next(true),
        this.displayService.$lookAtEventList.next(false)
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

  deleteEvent() {
     console.log("deleting event")
    // //convert text to number
    // const id = parseInt(this.userInput);
    // //returns an observable
    // this.httpService.deleteSelectedEvent(id)
    // pipe(first()).subscribe({
    //   next: (deleteData) => {
    //     console.log("Event deleted!")
    //     console.log(deleteData)
    //   },
    //   error: (error) => {
    //     console.log("Event delete FAIL")
    //     console.log(error)
    //   }
    // })

  }



}
