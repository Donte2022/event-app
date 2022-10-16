import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, takeUntil } from 'rxjs';
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
    // eventContactNameMessage: string | null = null;
    // eventContactNumberMessage: string | null = null;
    // eventContactEmailMessage: string | null = null;
    // eventCostMessage: string | null = null;
    // eventNoteMessage: string | null = null;
    eventFailureMessage: string | null = null;
    eventSuccessMessage: string | null = null;
    
    
    
    //Imported event Info from Db to be updated
    updatedEventDataValues = 
        {
        id:"",
    eventName: "",
    meetingDate: "",
    eventTimeStart: "",
    eventTimeEnd: "",
    location: "",
//     contactPersonName: "",
//     contactPersonNumber: "",
//     contactPersonEmail: "",
//     costToAttend: "",
//     notes: ""
};

    //http Erorr Message
    eventUpdateFail: string | null = null;


    constructor(private eventService: EventsService,
              private updateEventService: UpdateEventService,
              private httpService: HttpService) {

      // @ts-ignore
      this.updatedEventDataValues = this.updateEventService.updatedEventData
      console.log(this.updatedEventDataValues)

      //http Error Message from service
        this.updateEventService.$eventFailureHttp.subscribe(
            httpFailure => this.eventUpdateFail = httpFailure);

        this.updateEventService.$eventError.subscribe(
            eventError => this.eventNameMessage = eventError);

        this.updateEventService.$eventError2.subscribe(
            eventError2 => this.eventMeetingDateMessage = eventError2);

        this.updateEventService.$eventError3.subscribe(
            eventError3 => this.eventTimeStartMessage = eventError3);

        this.updateEventService.$eventError4.subscribe(
            eventError4 => this.eventTimeEndMessage = eventError4);

        this.updateEventService.$eventError5.subscribe(
            eventError5 => this.eventLocationMessage = eventError5);
        //
        // this.updateEventService.$eventError6.subscribe(
        //     eventError6 => this.eventContactNameMessage = eventError6);
        //
        // this.updateEventService.$eventError7.subscribe(
        //     eventError7 => this.eventContactNumberMessage = eventError7);
        //
        // this.updateEventService.$eventError8.subscribe(
        //     eventError8 => this.eventContactNumberMessage = eventError8);
        //
        // this.updateEventService.$eventError9.subscribe(
        //     eventError9 => this.eventCostMessage = eventError9);
        //
        // this.updateEventService.$eventError0.subscribe(
        //     eventError0 => this.eventNoteMessage = eventError0);

        this.updateEventService.$eventFailureHttp.subscribe(
            eventFailureMessage => this.eventFailureMessage = eventFailureMessage);

        this.updateEventService.$eventSuccessHttp.subscribe(
            eventSuccessMessage => this.eventSuccessMessage = eventSuccessMessage);
      
      
  }

  onDestroy(onDestroy: any): any {
        
    }


  ngOnInit(): void {

  }

    onClickBack() {
        console.log("going back")
      this.updateEventService.$isUpdatingEvent.next(false)
      this.updateEventService.$isViewingMainPage.next(true)

    }

  onUpdateEventClick(eventForm:IEvents) {
    console.log("retrieving data")
    console.log(eventForm)
    this.updateEventService.sendUpdatedValues(eventForm as IEvents)
    

  };
}
