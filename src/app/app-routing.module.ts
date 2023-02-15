import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HodDashboardComponent } from './component/hod-dashboard/hod-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { StaffDashboardComponent } from './component/staff-dashboard/staff-dashboard.component';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';

const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch : 'full' },
  { path : 'login', component : LoginComponent },
  { path : 'registration', component : RegistrationComponent },
  { path : 'hodDashboard', canActivate: [AuthGaurdService], component : HodDashboardComponent },
  { path : 'staffDashboard', canActivate: [AuthGaurdService], component : StaffDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }