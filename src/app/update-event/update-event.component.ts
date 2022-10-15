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

    //Imported event Info from Db to be updated
    updatedEventDataValues = 
        {
        id:"",
    eventName: "",
    meetingDate: "",
    eventTimeStart: "",
    eventTimeEnd: "",
    location: "",
    contactPersonName: "",
    contactPersonNumber: "",
    contactPersonEmail: "",
    costToAttend: "",
    notes: ""
};

    //http Erorr Message
    eventUpdateFail: string | null = null;


    constructor(private eventService: EventsService,
              private updateEventService: UpdateEventService,
              private httpService: HttpService) {

      // @ts-ignore
      this.updatedEventDataValues = this.updateEventService.updatedEventData
      console.log(this.updatedEventDataValues)

      
        this.updateEventService.$eventFailureHttp.subscribe(
            httpFailure => this.eventUpdateFail = httpFailure); 


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
