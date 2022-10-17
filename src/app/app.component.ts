import { Component } from '@angular/core';
import {Subject, takeUntil } from 'rxjs';
import {AccountService} from "./account.service";
import { DisplayService } from './display.service';
import { EventsService } from './events.service';
import { InvitesService } from './invites.service';
import { UpdateEventService } from './update-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dontavious-green-AngularPrj';

    isViewingMainPage: boolean = false;
    isCreatingEvent: boolean = false;
    isCreatingInvite: boolean = false;
    isUpdatingInvite: boolean = false;
    isUpdatingEvent: boolean = false;

    NewUser: boolean = false;
    isLoggedIn: boolean = false;

    onDestroy = new Subject();
    
    constructor(private accountService: AccountService,
                private eventService: EventsService,
                private inviteService: InvitesService,
                private displayService: DisplayService,
                private updateEventService: UpdateEventService) {

        //listen to when the 'join' btn is clicked
        //and switches the page
        this.accountService.$creatingNewUser.subscribe(
            creatingNewUser => {
                this.NewUser = creatingNewUser;
            });

        //accountService switch
        this.accountService.$account.pipe(takeUntil(this.onDestroy)).subscribe(account => {
            this.isLoggedIn = account ? true : false;
        });

        //eventService Switch
        this.eventService.$createNewEvent.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });

        this.eventService.$isViewingMainPage.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });
        
        //inviteService switch
        this.inviteService.$manageInvites.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });

        this.inviteService.$createNewEvents.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });
        
        this.inviteService.$isViewingMainPage.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        })

        this.inviteService.$isupdatingInvite.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isUpdatingInvite = event ? true : false;
        })

        //displayService Switch
        this.displayService.$createNewEvents.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });

        this.displayService.$lookAtEventList.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });

        this.displayService.$manageInvites.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });

        //updateService Switch
        this.updateEventService.$isViewingMainPage.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });

        this.updateEventService.$isCreatingEvent.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });
        
        this.updateEventService.$isUpdatingEvent.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            this.isUpdatingEvent = event ? true : false;
        });
        
        }

        ngOnDestroy(): void {
            this.onDestroy.next(null);
            this.onDestroy.complete();
        }
    }
