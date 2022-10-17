import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HttpService } from '../http.service';
import { IAccount } from '../Interface/IAccount';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  accounts:IAccount =
      {
        id:"",
        firstName: "",
        lastName: "",
        userId: "",
        password: "",
        emailAddress: ""
      };

  constructor(private inviteService: InvitesService,
              private httpService: HttpService) {

    //retrieve data from observable(promise)
    this.httpService.getAccounts().pipe(first()).subscribe( {
      //this func is executed if data is received
      next: (data) => {
        this.accounts = data;
      },
      //this func is executed if request fails
      error: (err) => {
        console.log(err)
        //this.errorMessagesServer = err;
      }
    })

  }

  ngOnInit(): void {
  }

  backToEventList() {
    this.inviteService.$manageInvites.next(false),
        this.inviteService.$isViewingMainPage.next(true);
  }

  sendInvite() {
  }


}
