import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/auth/models/user.model';
import { LoginService } from 'src/app/auth/services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, OnChanges {
  public faUserCircle = faUserCircle;
  public faSignInAlt = faSignInAlt;
  public faSignOutAlt = faSignOutAlt;
  // public name: string;
  public loggedIn: boolean;
  subscriptionToLogger: Subscription;
  data = [];
  isLoggedFromArray: boolean;
  

  constructor(
    private router: Router, 
    private login: LoginService, 
    private authService: AuthService) {
   }

  ngOnInit() {
    this.subscriptionToLogger = this.authService.wasAuthorized.subscribe(didLog => {
      this.loggedIn = didLog;
    })
    // this.isLoggedIn = this.authService.loggedIn;
    // this.name = this.login.user.name;
    this.data = this.login.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes + " changes");
  }
  ngOnDestroy(): void {
    this.subscriptionToLogger.unsubscribe()
  }
  onLoginClick() {
    console.log(this.login.user);
    if (this.loggedIn === true) {
      console.log('logging out');
      this.authService.wasAuthorized.next(false);
      this.authService.logout();
      this.router.navigate(['']);
      this.login.clearData();
      // this.login.clearUser();
      localStorage.clear();
      this.login.clearUser()
      console.log(this.login.user);
      
    } else {
      alert('submit correct data in the form')
    }
  }
}
