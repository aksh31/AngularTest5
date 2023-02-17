import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LeaveManagementService } from 'src/app/shared/services/leave-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm! : NgForm;
  constructor(private authService : AuthService, private router : Router, private leaveManagementService : LeaveManagementService) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm) {
    console.log(f.value);
    let obj = {
      userName : f.value.userName,
      password : f.value.password
    }
    const hodArray = this.leaveManagementService.getHODArray();
    const staffArray = this.leaveManagementService.getStaffArray();

    // const data = hodArray.concat(staffArray);
    // console.log(data);

    // data.forEach(ele => {
    //   if (obj.userName === ele.userName) {
    //     console.log('log in as HOD');
        
    //     this.authService.logIn();
    //     this.router.navigate(['/hodDashboard']);
    //   }
    //   else if (obj.userName === ele.userName) {
    //     console.log('log in as Staff');
  
    //     this.authService.logIn();
    //     this.router.navigate(['/staffDashboard']);
    //   }
    //   return;
    // })
    

    hodArray.forEach(ele => {
      if (obj.userName === ele.userName) {
        console.log('log in as HOD');
        
        this.authService.logIn();
        this.router.navigate(['/hodDashboard']);
      }
      // else {
      //   alert("Aplya ghari jaaa")
      // }
      return;
    });


    staffArray.forEach(ele => {
      if (obj.userName === ele.userName) {
        console.log('log in as Staff');
  
        this.authService.logIn();
        this.router.navigate(['/staffDashboard']);
      } 
      // else {
      //   alert("Aplya ghari jaaa")
      // }
      return;
    });

  }

}
