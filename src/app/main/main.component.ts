import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { EventsService } from '../events.service';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private eventService: EventsService,
              private inviteService: InvitesService,
              private accountService: AccountService) { }

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
