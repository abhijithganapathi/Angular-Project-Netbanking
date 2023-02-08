import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetails:any={
    1000:{acno:1000, username:"anu", password:"abc123", balance:0},
    1001:{acno:1001, username:"abi", password:"abc123", balance:0},
    1003:{acno:1003, username:"amal", password:"abc123", balance:0},
    1004:{acno:1004, username:"akhil", password:"abc123", balance:0}
  }
}
