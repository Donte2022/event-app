import { Component, OnInit } from '@angular/core';
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
    this.httpService.getAccounts().subscribe( {
      //this func is executed if data is received
      next: (data) => {
        this.accounts = data;
        const getUserNames = Object.values(this.accounts)
          console.log(getUserNames)

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
