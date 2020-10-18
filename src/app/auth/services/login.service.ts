import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {IUser} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = new BehaviorSubject<IUser>(null);
  public data: any[] = [];
  constructor() { }

  public setLogin(user) {
    this.clearData();
    this.setData(user);
    // console.log(this.data);
  }

  public getUser() {
    // console.log('getting user' + this.user.name);
    return this.user;
  }

  public clearUser() {
    this.user.next(null);
  }
  public setData(username: string) {
    this.data.push(username);
  }
  public getData() {
    return this.data;
  }

  public clearData() {
    this.data.length = 0;
  }
}
