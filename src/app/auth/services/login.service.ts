import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: string;
  public isloggedIn = new EventEmitter<boolean>();
  constructor() { }

  logger(user) {
    console.log('Hello from login service: ' + user)
  }
}
