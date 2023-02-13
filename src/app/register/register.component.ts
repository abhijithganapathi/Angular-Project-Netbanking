import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname = ''
  acno = ''
  psw = ''
  constructor(private ds: DataService) { }

  register() {
    var uname = this.uname
    var acno = this.acno
    var psw = this.psw
    const result=this.ds.register(uname, acno, psw)

    if(result){
      alert('registered')
    }
    else{
      alert('account number already present')      
    }

    // console.log(uname,acno,psw);

  }
}
