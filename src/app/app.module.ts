import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { EventsComponent } from './events/events.component';
import { InvitationComponent } from './invitation/invitation.component';
import { DisplayComponent } from './display/display.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateInviteComponent } from './update-invite/update-invite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    EventsComponent,
    InvitationComponent,
    DisplayComponent,
    UpdateEventComponent,
    UpdateInviteComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
      FormsModule,
      HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
