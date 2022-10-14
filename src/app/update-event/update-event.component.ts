import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  
  // $lookAtEventList = new BehaviorSubject<boolean>(false);
  // $manageInvites = new BehaviorSubject<boolean>(false);
  // $isUpdatingEvent = new BehaviorSubject<boolean>(false);
  // $createNewEvents = new BehaviorSubject<boolean>(false);


  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
  }

    onClickBack() {
        console.log("going back")
    }
}
