import { Injectable, EventEmitter } from '@angular/core';
import {IUser} from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: IUser = { name: '' };
  data: any[] = [];
  constructor() { }

  setLogin(user) {
    // console.log('Hello from login service: ' + user + ' and ' + password);
    this.user.name = user;
    // console.log(this.user)
    // this.user.password = password;
    // if (user) {
    //   this.user.isLoggedIn = true;
    // }
    this.clearData();
    this.setData(this.user.name);
    // console.log(this.data);
  }

  getUser(){
    // console.log('getting user' + this.user.name);
    return this.user.name;
  }
  // checkIfLoggedIn(){
  //   console.log('checking if logged');
  //   return this.user.isLoggedIn;
  // }

  clearUser() {
    this.user.name = '';
    // this.user.isLoggedIn = false;
  }
  setData(username: string) {
    this.data.push(username);
    // this.data.push(logged);
  }
  getData() {
    return this.data;
  }
  
  clearData() {
    this.data.length = 0;
  }
}
