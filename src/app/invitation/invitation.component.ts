import { Component, OnInit } from '@angular/core';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  constructor(private inviteService: InvitesService) { }

  ngOnInit(): void {
  }

  backToEventList() {
    console.log ("going back..")
    this.inviteService.$manageInvites.next(false),
        this.inviteService.$isViewingMainPage.next(true);
  }

  sendInvite() {
    console.log("sending invites...")
  }


}
