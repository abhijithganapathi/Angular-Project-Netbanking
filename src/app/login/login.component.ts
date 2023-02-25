import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "your perfect banking partner"
  inputplaceholder = "account number"

  loginForm = this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnit(): void {
  }

  login() {
    var acnum = this.loginForm.value.acno
    var psw = this.loginForm.value.pass

    if (this.loginForm.valid) {

      const result = this.ds.login(acnum, psw)

      if (result) {
        alert('Login Successful')
        this.router.navigateByUrl('dashboard')
      }
      else {
        alert('incorrect account number or password')
      }
    }
    else{
      alert('invalid form')
    }
  }

  //   login(a:any,b:any){
  //     console.log(a.value);
  //     console.log(b.value);



  //   //   // var acnum=this.acno
  //   //   // var psw=this.pass
  //   //   // var userDetails=this.userDetails

  //   //   // if(acnum in userDetails){
  //   //   //   if(psw==userDetails[acnum]["password"]){
  //   //   //     alert('login success')
  //   //   //   }
  //   //   //   else{
  //   //   //     alert('incorrect password')
  //   //   //   }
  //   //   // }
  //   //   // else{
  //   //   //   alert('acc no not found or not registered yet!')
  //   //   // }
  //   // }


  //   // acnoChange(event:any){
  //   //   this.acno=event.target.value
  //   //   console.log(this.acno);

  //   // }

  //   // passChange(event:any){
  //   //   this.pass=event.target.value
  //   //   console.log(this.pass);

  //   // }
}

