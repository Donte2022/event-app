import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private eventService: EventsService,
              private inviteService: InvitesService) { }

  ngOnInit(): void {
  }

  createEvent() {
    console.log("creating event")
    this.eventService.newEvent()
    
  }

  inviteUsers() {
    console.log("Inviting users")
    this.inviteService.manageInvites()
  }
}
