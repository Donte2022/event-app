import { Component } from '@angular/core';
import {AccountService} from "./account.service";
import { DisplayService } from './display.service';
import { EventsService } from './events.service';
import { InvitesService } from './invites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dontavious-green-AngularPrj';
    isCreatingEvent: boolean = false;
    isViewingMainPage: boolean = false;    
    isCreatingInvite: boolean = false;
    NewUser: boolean = false;
    isLoggedIn: boolean = false;

    constructor(private accountService: AccountService,
                private eventService: EventsService,
                private inviteService: InvitesService,
                private displayService: DisplayService) {

        //listen to when the 'join' btn is clicked
        //and switches the page
        this.accountService.$creatingNewUser.subscribe(
            creatingNewUser => {
                this.NewUser = creatingNewUser;
            });

        this.accountService.$account.subscribe(account => {
            this.isLoggedIn = account ? true : false;
        });
        
        this.eventService.$createNewEvent.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });

        this.eventService.$createInvites.subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });

        this.eventService.$viewEventsandInvites.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });
        
        
        this.inviteService.$manageInvites.subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });

        this.inviteService.$createNewEvents.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });
        
        this.inviteService.$lookAtEventList.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        })

        this.displayService.$createNewEvents.subscribe(event => {
            this.isCreatingEvent = event ? true : false;
        });

        this.displayService.$lookAtEventList.subscribe(event => {
            this.isViewingMainPage = event ? true : false;
        });

        this.displayService.$manageInvites.subscribe(event => {
            this.isCreatingInvite = event ? true : false;
        });
    }



}