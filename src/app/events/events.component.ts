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

  //Error messages for creating an event
  eventNameMessage: string | null = null;
  eventMeetingDateMessage: string | null = null;
  eventTimeStartMessage: string | null = null;
  eventTimeEndMessage: string | null = null;
  eventLocationMessage: string | null = null;
  eventContactNameMessage: string | null = null;
  eventContactNumberMessage: string | null = null;
  eventContactEmailMessage: string | null = null;
  eventCostMessage: string | null = null;
  eventNoteMessage: string | null = null;
  eventFailureMessage: string | null = null;
  eventSuccessMessage: string | null = null;
  // Use to delete an event
  event: any;

  
  constructor(private eventService: EventsService) {

    this.eventService.$eventError.subscribe(
        eventError => this.eventNameMessage = eventError);

    this.eventService.$eventError2.subscribe(
        eventError2 => this.eventMeetingDateMessage = eventError2);

    this.eventService.$eventError3.subscribe(
        eventError3 => this.eventTimeStartMessage = eventError3);

    this.eventService.$eventError4.subscribe(
        eventError4 => this.eventTimeEndMessage = eventError4);

    this.eventService.$eventError5.subscribe(
        eventError5 => this.eventLocationMessage = eventError5);
    
    this.eventService.$eventError6.subscribe(
        eventError6 => this.eventContactNameMessage = eventError6);

    this.eventService.$eventError7.subscribe(
        eventError7 => this.eventContactNumberMessage = eventError7);

    this.eventService.$eventError8.subscribe(
        eventError8 => this.eventContactNumberMessage = eventError8);

    this.eventService.$eventError9.subscribe(
        eventError9 => this.eventCostMessage = eventError9);

    this.eventService.$eventError0.subscribe(
        eventError0 => this.eventNoteMessage = eventError0);

    this.eventService.$eventFailureHttp.subscribe(
        eventFailureMessage => this.eventFailureMessage = eventFailureMessage);

    this.eventService.$eventSuccessHttp.subscribe(
        eventSuccessMessage => this.eventSuccessMessage = eventSuccessMessage);

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


  onNewEventClick(eventForm: NgForm) {
    this.eventService.newEvent(
        eventForm.value as IEvents
    );
  }
}

