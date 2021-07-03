import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isModeSignIn=false;

  constructor(public authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
  }

  toggleForm(){
    this.isModeSignIn=!this.isModeSignIn;
  }
  async onLogin(form: NgForm){
    if( form.value.email ==='' || form.value.password ==='' ){
      alert("All fields are mandatory !!");
    } else {
      this.authService.login(form.value.email, form.value.password);
      this.router.navigate(['']);

    }
  }
  onSignUp(form: NgForm){
    if(form.value.username ==='' || form.value.email ==='' || form.value.password ==='' || form.value.confirmpassword ===''){
      alert("All fields are mandatory !!");
    } else if(form.value.password !== form.value.confirmpassword  ){
      alert("Password does not match !!");
      form.resetForm();
    } else {
      this.authService.createUser(form.value.username , form.value.email, form.value.password);
      this.toggleForm();
    }
  }
  awin(){
    console.log(this.authService.isLoggedIn());
  }
}
