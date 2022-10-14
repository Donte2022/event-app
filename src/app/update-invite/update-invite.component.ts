import { Component, OnInit } from '@angular/core';
import { InvitesService } from '../invites.service';

@Component({
  selector: 'app-update-invite',
  templateUrl: './update-invite.component.html',
  styleUrls: ['./update-invite.component.css']
})
export class UpdateInviteComponent implements OnInit {

  constructor(private inviteService: InvitesService) { }

  ngOnInit(): void {
  }

  leaveUpdateInvitePage() {
    console.log("leaving page")
    this.inviteService.$isViewingMainPage.next(true),
        this.inviteService.$isupdatingInvite.next(false)



  }
}
