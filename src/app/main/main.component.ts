import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { AccountService } from '../account.service';
import { DisplayService } from '../display.service';
import { EventsService } from '../events.service';
import { HttpService } from '../http.service';
import { IEvents } from '../Interface/IEvents';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  $manageInvites = new BehaviorSubject<boolean>(false);
  $createNewEvents = new BehaviorSubject<boolean>(false);
  $lookAtEventList = new BehaviorSubject<boolean>(true);

  //Delete and Update Messages
  deleteFailMessage: string | null = null;
  deleteSuccessMessage: string | null = null;
  eventFromDatabase: any = [];
  sortedData: any = [];

  onDestroy = new Subject();
  
  constructor(private eventService: EventsService,
              private inviteService: InvitesService,
              private accountService: AccountService,
              private displayService: DisplayService,
              private httpService: HttpService) {

    this.displayService.$deleteMyEventError.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteIdFail => this.deleteFailMessage = deleteIdFail);

    this.displayService.$deleteMyEventSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteIdSuccess => this.deleteSuccessMessage = deleteIdSuccess);
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }
  
  createEvent() {
    this.eventService.switchToEventPage()
  }
  
  logOut() {
    this.accountService.logOutUser()
  }
}
