import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any
  
  acno: any
  psw: any
  amt: any

  acno1:any
  psw1:any
  amt1:any
   
  constructor(private ds:DataService){
    this.user=this.ds.currentUser
  }

  deposit(){
    var amt = this.amt
    var acno = this.acno
    var psw = this.psw
    const result=this.ds.deposit(amt, acno, psw)

    if(acno in this.ds.userDetails){

    }
  }

  withdraw(){
    var amt = this.amt1
    var acno = this.acno1
    var psw = this.psw1
  }
}
