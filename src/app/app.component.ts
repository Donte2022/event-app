import { Component } from '@angular/core';
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
        this.accountService.$account.subscribe(account => {
            this.isLoggedIn = account ? true : false;
            console.log("loggin in")
        });

        //eventService Switch
        this.eventService.$createNewEvent.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });

        // this.eventService.$createInvites.subscribe(event => {
        //     this.isCreatingInvite = event ? true : false;
        // });

        this.eventService.$isViewingMainPage.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });
        
        //inviteService switch
        this.inviteService.$manageInvites.subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });

        this.inviteService.$createNewEvents.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });
        
        this.inviteService.$isViewingMainPage.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        })

        //displayService Switch
        this.displayService.$createNewEvents.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });

        this.displayService.$lookAtEventList.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });

        this.displayService.$manageInvites.subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });

        //updateService Switch
        this.updateEventService.$isViewingMainPage.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });

        // this.updateEventService.$manageInvites.subscribe(event => {
        //     this.isCreatingInvite = event ? true : false;
        // });

        this.updateEventService.$isCreatingEvent.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });
        
        this.updateEventService.$isUpdatingEvent.subscribe(event => {
            this.isUpdatingEvent = event ? true : false;
        });

        // this.updateEventService.$updateMyInvite.subscribe(event => {
        //     this.isUpdatingInvite = event ? true : false;
        // });
        
    }



}