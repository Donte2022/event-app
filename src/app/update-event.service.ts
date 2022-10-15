import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvents } from './Interface/IEvents';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventService {

  updatedEventData: string = "";

  // $oldEventName: IEvents[] = [];
  $oldEventName = new BehaviorSubject<IEvents[]>([]);

  $isUpdatingEvent = new BehaviorSubject<boolean>(false);
  // $manageInvites = new BehaviorSubject<boolean>(false);
  $isCreatingEvent = new BehaviorSubject<boolean>(false);
  $isViewingMainPage = new BehaviorSubject<boolean>(false);
  // $updateMyInvite = new BehaviorSubject<boolean>(false);
  $updatedEventData = new BehaviorSubject<string | null>(null);

  updateThisEvent(eventInfo:any) {
    console.log("forwarding data")
    console.log(eventInfo)
    this.updatedEventData = eventInfo;
    console.log(this.updatedEventData)
    console.log(eventInfo)
    // @ts-ignore
    console.log(this.updatedEventData.eventName)

    // @ts-ignore
    this.$oldEventName = this.updatedEventData.eventName
    console.log(this.$oldEventName)
  }

  constructor() {
    
  }
  
  
}
