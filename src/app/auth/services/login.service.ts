import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {IUser} from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new BehaviorSubject<IUser>(null);
  data: any[] = [];
  constructor() { }

  setLogin(user) {
    this.clearData();
    this.setData(user);
    // console.log(this.data);
  }

  getUser(){
    // console.log('getting user' + this.user.name);
    return this.user;
  }

  clearUser() {
    this.user.next(null);
  }
  setData(username: string) {
    this.data.push(username);
  }
  getData() {
    return this.data;
  }
  
  clearData() {
    this.data.length = 0;
  }
}
