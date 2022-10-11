import { Component } from '@angular/core';
import {AccountService} from "./account.service";
import { EventsService } from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dontavious-green-AngularPrj';
    isCreatingEvent: boolean = false;
    isLoggedIn: boolean = false;
    isCreatingInvite: boolean = false;
    NewUser: boolean = false;

    constructor(private accountService: AccountService,
                private eventService: EventsService) {

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
        })

    }



}