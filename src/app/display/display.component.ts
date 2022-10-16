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
      }
    })
    
  }

  ngOnInit(): void {
  }

  manageInvite(sendInvite:any) {
    console.log("Inviting others")
    console.log(sendInvite)
    this.inviteService.$isViewingMainPage.next(false),
    this.inviteService.$manageInvites.next(true);

  }

  updateEvent(updateThisEventInfo: any) {
    console.log("Updating event..")
    console.log(updateThisEventInfo)
    this.updateEventService.$isUpdatingEvent.next(true)
        this.updateEventService.$isViewingMainPage.next(false),
        this.updateEventService.$isCreatingEvent.next(false)
    this.updateEventService.updateThisEvent(updateThisEventInfo);
   
  }

  deleteEvent(deleteThisEvent:any) {
     this.displayService.deleteMyEvent(deleteThisEvent);
  }


  deleteInvite(deleteThisInvite:any) {
  }

  updateInvite(updateThisInvite:any) {
    this.inviteService.$isViewingMainPage.next(false),
     this.inviteService.$isupdatingInvite.next(true)

  }

  deleteInvitation(deleteThisInvitation:any) {
    this.displayService.deleteMyInvitation(deleteThisInvitation);

  }
}
