import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="your perfect banking partner"
  inputplaceholder="account number"
  acno=''
  pass=''
  userDetails:any={
    1000:{acno:1000, username:"anu", password:"abc123", balance:0},
    1001:{acno:1001, username:"abi", password:"abc123", balance:0},
    1003:{acno:1003, username:"amal", password:"abc123", balance:0},
    1004:{acno:1004, username:"akhil", password:"abc123", balance:0}
  }
  constructor(){}

  login(){
    alert('login clicked')
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  passChange(event:any){
    this.pass=event.target.value
    console.log(this.pass);
    
  }
}
