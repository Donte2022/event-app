import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
  }

  createEvent() {
    console.log("creating event")
    this.eventService.newEvent()
    
  }
  
}
