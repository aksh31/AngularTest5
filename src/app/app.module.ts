import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HodDashboardComponent } from './component/hod-dashboard/hod-dashboard.component';
import { StaffDashboardComponent } from './component/staff-dashboard/staff-dashboard.component';
import { RegistrationComponent } from './component/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HodDashboardComponent,
    StaffDashboardComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
