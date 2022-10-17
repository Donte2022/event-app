import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { EventsService } from '../events.service';
import { HttpService } from '../http.service';
import { IEvents } from '../Interface/IEvents';
import { UpdateEventService } from '../update-event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

    //Error messages for creating an event
    eventNameMessage: string | null = null;
    eventMeetingDateMessage: string | null = null;
    eventTimeStartMessage: string | null = null;
    eventTimeEndMessage: string | null = null;
    eventLocationMessage: string | null = null;
    eventFailureMessage: string | null = null;
    eventSuccessMessage: string | null = null;
    eventClearSuccessMess: string | null = null;
    
    //Imported event Info from Db to be updated
    updatedEventDataValues = 
        {
        id:"",
    eventName: "",
    meetingDate: "",
    eventTimeStart: "",
    eventTimeEnd: "",
    location: "",
};

    //http Erorr Message
    eventUpdateFail: string | null = null;

    onDestroy = new Subject();
    
    constructor(private eventService: EventsService,
              private updateEventService: UpdateEventService,
              private httpService: HttpService) {

      // @ts-ignore
      this.updatedEventDataValues = this.updateEventService.updatedEventData

      //http Error Message from service
        this.updateEventService.$eventFailureHttp.pipe(takeUntil(this.onDestroy)).subscribe(
            httpFailure => this.eventUpdateFail = httpFailure);

        this.updateEventService.$eventError.pipe(takeUntil(this.onDestroy)).subscribe(
            eventError => this.eventNameMessage = eventError);

        this.updateEventService.$eventError2.pipe(takeUntil(this.onDestroy)).subscribe(
            eventError2 => this.eventMeetingDateMessage = eventError2);

        this.updateEventService.$eventError3.pipe(takeUntil(this.onDestroy)).subscribe(
            eventError3 => this.eventTimeStartMessage = eventError3);

        this.updateEventService.$eventError4.pipe(takeUntil(this.onDestroy)).subscribe(
            eventError4 => this.eventTimeEndMessage = eventError4);

        this.updateEventService.$eventError5.pipe(takeUntil(this.onDestroy)).subscribe(
            eventError5 => this.eventLocationMessage = eventError5);

        this.updateEventService.$eventFailureHttp.pipe(takeUntil(this.onDestroy)).subscribe(
            eventFailureMessage => this.eventFailureMessage = eventFailureMessage);

        this.updateEventService.$eventSuccessHttp.pipe(takeUntil(this.onDestroy)).subscribe(
            eventSuccessMessage => this.eventSuccessMessage = eventSuccessMessage);

        this.updateEventService.$clearEventSuccessMessage.pipe(takeUntil(this.onDestroy)).subscribe(
            eventEmptySuccessMessage => this.eventSuccessMessage = eventEmptySuccessMessage);
  }

    ngOnDestroy(): void {
        this.onDestroy.next(null);
        this.onDestroy.complete();
    }


  ngOnInit(): void {

  }

    onClickBack() {
      this.updateEventService.$isUpdatingEvent.next(false)
      this.updateEventService.$isViewingMainPage.next(true)
    }

  onUpdateEventClick(eventForm:IEvents) {
    this.updateEventService.sendUpdatedValues(eventForm as IEvents)
  };
}
