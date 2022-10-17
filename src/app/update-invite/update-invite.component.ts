import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HttpService } from '../http.service';
import { IAccount } from '../Interface/IAccount';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-update-invite',
  templateUrl: './update-invite.component.html',
  styleUrls: ['./update-invite.component.css']
})
export class UpdateInviteComponent implements OnInit {

  accounts:IAccount =
      {
        id:"",
        firstName: "",
        lastName: "",
        userId: "",
        password: "",
        emailAddress: ""
      };

  userIdInfo: IAccount = {
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
        const getUserNames = this.accounts
      },
      //this func is executed if request fails
      error: (err) => {
        console.log(err)
      }
    })
}

  ngOnInit(): void {
  }

  leaveUpdateInvitePage() {
    this.inviteService.$isViewingMainPage.next(true),
        this.inviteService.$isupdatingInvite.next(false)
  }

  onClickAddPerson() {
  }

  onClickDeletePerson() {

  }

  updateInvite() {
    
  }
}
