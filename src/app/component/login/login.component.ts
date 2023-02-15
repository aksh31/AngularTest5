import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm! : NgForm;
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm) {
    console.log(f.value);
    let obj = {
      userName : f.value.username,
      password : f.value.password
    }

    if (obj.userName === "hod") {
      console.log('log in as HOD');
      
      this.authService.logIn();
      this.router.navigate(['/hodDashboard']);
    }
    else if (obj.userName === "staff") {
      console.log('log in as Staff');

      this.authService.logIn();
      this.router.navigate(['/staffDashboard']);
    } 
    else {
      alert("Aplya ghari jaaa")
    }
  }

}
