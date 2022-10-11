import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
  }

  cancelCreateEvent() {
    console.log("canceling creaitng event")
      //cancel registration and bring user back to the login
      this.eventService.$createNewEvent.next(false);
      this.eventService.$createInvites.next(false);
      this.eventService.$viewEventsandInvites.next(true);

    }
  }

