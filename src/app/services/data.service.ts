import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=''

  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { acno: 1001, username: "abi", password: "abc123", balance: 0 },
    1003: { acno: 1003, username: "amal", password: "abc123", balance: 0 },
    1004: { acno: 1004, username: "akhil", password: "abc123", balance: 0 }
  }

  register(uname: any, acno: any, psw: any) {
    if (acno in this.userDetails) {
      return false
    }
    else {
      this.userDetails[acno] = { acno, username: uname, password: psw, balance: 0 }
      console.log(this.userDetails);
      return true
    }
  }
  
  login(acno:any,pass:any){
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(pass==userDetails[acno]["password"]){
        this.currentUser=userDetails[acno]['username']
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
  deposit(acnum:any, password:any, amount:any){
    let userDetails=this.userDetails
    // convert string amount to number
    var amnt = parseInt(amount)
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){
        userDetails[acnum]["balance"]+=amnt
        return userDetails[acnum]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
}
