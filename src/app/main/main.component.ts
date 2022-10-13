import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from '../account.service';
import { EventsService } from '../events.service';
import { HttpService } from '../http.service';
import { IEvents } from '../Interface/IEvents';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  $manageInvites = new BehaviorSubject<boolean>(false);
  $createNewEvents = new BehaviorSubject<boolean>(false);
  $lookAtEventList = new BehaviorSubject<boolean>(true);
  
  // @Input() event!:IEvents;
  
  eventFromDatabase: any = [];
  
  
  constructor(private eventService: EventsService,
              private inviteService: InvitesService,
              private accountService: AccountService,
              private httpService: HttpService) {

    //retrieve data from observable(promise)
    this.httpService.getEvents().subscribe( {
      //this func is executed if data is received
      next: (data) => {
        console.log(data)
        console.log(data)
        this.eventFromDatabase = data;
        console.log(this.eventFromDatabase)
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

 
  
  
  createEvent() {
    this.eventService.switchToEventPage()
    
  }

  inviteUsers() {
    this.inviteService.manageInvites()
  }

  logOut() {
    this.accountService.logOutUser()
  }
}
