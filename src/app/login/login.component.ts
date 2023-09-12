import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginform:FormGroup= new FormGroup({
    email: new FormControl(),
    password: new FormControl()
    
  });
  constructor(private loginservice:LoginService,private router:Router){}
 login(){
  console.log(this.loginform)
  this.loginservice.login(this.loginform.value).subscribe(
    (data:any)=>{
      alert("login success");
      this.router.navigateByUrl("/dashboard");
      localStorage.setItem('token',data.token)
    },
    (err:any)=>{
      alert("Login Failed")
    }
  )

 }



}

