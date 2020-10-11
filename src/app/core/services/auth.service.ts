import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedIn: boolean = false;
  wasAuthorized = new Subject<boolean>();
  constructor() { }
  
  isAuthenticated() {
    const authPromise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 600);
      }
    )
    return authPromise;
  }

  login(){
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn = false;
  }
}
