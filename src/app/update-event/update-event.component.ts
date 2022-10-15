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
  
updatedInfo:any = [];
newEventInfo = []
oldName:string = "";

eventData!:IEvents[];

userData = {
    id:"",
    eventName: "David",
    meetingDate: "2022-10-13",
    eventTimeStart: "12:00",
    eventTimeEnd: "12:30",
    location: "Minnesota",
    ContactPersonName: "Donny",
    ContactPersonNumber: 123456789,
    ContactPersonEmail: "donnyG@gmail.com",
    costToAttend: 0,
    notes: "Have Mad Fun"
}



  constructor(private eventService: EventsService,
              private updateEventService: UpdateEventService,
              private httpService: HttpService) {

    // this.updateEventService.$oldEventName.subscribe(
    //     (currentEventInfo) => {
    //       this.eventData = currentEventInfo
    //       console.log(this.eventData)
    //     });

    // this.updateEventService.updatedEventData.
    // // pipe(takeUntil(this.onDestroy)).
    // subscribe(eventName => this.eventData = eventName
    // );

    //retrieve data from observable(promise)
    this.httpService.getEvents()
        // pipe(first())
        .subscribe( {
          //this func is executed if data is received
          next: (data) => {
            console.log(data)
            this.eventData = data;
            console.log(this.eventData)
          },
          //this func is executed if request fails
          error: (error) => {
            console.log(error)
            //this.errorMessagesServer = err;
          }
        })



  }

  onDestroy(onDestroy: any): any {
        throw new Error('Method not implemented.');
    }


  // eventName: string;

  ngOnInit(): void {

    // this.newEventInfo = {
    //
    //   eventName: "late",
    // meetingDate: "12-3-22",
    // eventTimeStart: "12-00",
    // eventTimeEnd: "12-30",
    // location: "MN",
    // ContactPersonName: "Doug",
    // ContactPersonNumber: "123-45-6789",
    // ContactPersonEmail: "douglife@gmail.com",
    // costToAttend: 0,
    // notes: "Have Mad Fun",
    // }

  }

    onClickBack() {
        console.log("going back")
      this.updateEventService.$isUpdatingEvent.next(false)
      this.updateEventService.$isViewingMainPage.next(true)

    }

  onUpEventClick(eventForm: any) {
    console.log("retrieving data")
    console.log(eventForm)
    this.updateEventService.updatedEventData = this.updatedInfo;
    console.log("rec. data from service")
    console.log(this.updatedInfo)

    
  }
}
