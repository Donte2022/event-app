import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventsService } from '../events.service';
import { UpdateEventService } from '../update-event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  



  constructor(private eventService: EventsService,
              private updateEventService: UpdateEventService) { }

  ngOnInit(): void {
  }

    onClickBack() {
        console.log("going back")
      this.updateEventService.$isUpdatingEvent.next(false)
      this.updateEventService.$isViewingMainPage.next(true)

    }
}
