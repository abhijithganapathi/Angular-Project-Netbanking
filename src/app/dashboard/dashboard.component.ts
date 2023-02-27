import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any
  acno:any

  depositForm = this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    amt: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  withdrawForm = this.fb.group({
    acno1: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    amt1: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) {
    this.user = this.ds.currentUser
  }

  ngOnInit():void{
    if(!localStorage.getItem("currentAcno")){
      alert("Please Login")
      this.router.navigateByUrl("")
    }
  }

  deposit() {
    var amt = this.depositForm.value.amt
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw

    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, amt)

      if (result) {
        alert(`your account has been credited with amount ${amt}, balance is ${result}`)
      }
      else {
        alert("incorrect account number or password")
      }
    }
    else {
      alert('Invalid form')
    }

  }

  withdraw() {
    var amt = this.withdrawForm.value.amt1
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1

    if (this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno, psw, amt)

      if (result) {
        alert(`${amt} has been debited from your account, balance is ${result}`)
      }
    }
    else{
      alert('Invalid form')
    }

  }

  logOut(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")

    this.router.navigateByUrl("")
  }

  deleteParent(){
    this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
  }

}
