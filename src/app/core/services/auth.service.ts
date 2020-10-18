import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false;
  public wasAuthorized = new Subject<boolean>();
  constructor() { }

  public isAuthenticated() {
    const authPromise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        },         600);
      }
    );
    return authPromise;
  }

  public login() {
    this.loggedIn = true;
  }
  public logout() {
    this.loggedIn = false;
  }
}
