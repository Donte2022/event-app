import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../events.service';
import { IEvents } from '../Interface/IEvents';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() event!:IEvents;
  
  constructor(private eventService: EventsService) {
    
  }

  ngOnInit(): void {
  }

  leaveEventPage() {
    console.log("leaving event page")
      //cancel registration and bring user back to the login
      this.eventService.$createNewEvent.next(false);
      this.eventService.$createInvites.next(false);
      this.eventService.$viewEventsandInvites.next(true);

    }

  onDeleteClick() {
    console.log("deleting event")
    this.eventService.deleteEvent(this.event.id);  
  }

  onUpdateClick() {
    console.log("updating event")
    this.eventService.updateEvent(this.event.id);
  }

  inviteUsers() {
    
  }

  onNewEventClick(eventForm: NgForm) {
    this.eventService.newEvent(
        eventForm.value as IEvents
    );
  }
}

