import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;

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
