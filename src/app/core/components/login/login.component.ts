import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/auth/models/user.model';
import { LoginService } from 'src/app/auth/services/login.service';
import { AuthService } from '../../services/auth.service';
import { SearchResultsService } from '../../services/searchResults.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, OnChanges {
  public faUserCircle = faUserCircle;
  public faSignInAlt = faSignInAlt;
  public faSignOutAlt = faSignOutAlt;
  public loggedIn: boolean;
  public subscriptionToLogger: Subscription;
  public data = [];
  public isLoggedFromArray: boolean;

  constructor(
    private router: Router,
    private login: LoginService,
    private authService: AuthService,
    private search: SearchResultsService) {
   }

  public ngOnInit() {
    this.subscriptionToLogger = this.authService.wasAuthorized.subscribe(didLog => {
      this.loggedIn = didLog;
    });
    this.data = this.login.getData();
  }

  public ngOnChanges(changes: SimpleChanges) {
    // console.log(changes + ' changes');
  }
  public ngOnDestroy(): void {
    this.subscriptionToLogger.unsubscribe();
  }
  public onLoginClick() {
    // console.log(this.login.user);
    if (this.loggedIn === true) {
      // console.log('logging out');
      this.authService.wasAuthorized.next(false);
      this.authService.logout();
      this.router.navigate(['']);
      this.login.clearData();
      localStorage.clear();
      this.login.clearUser();
      // console.log(this.login.user);
      this.search.clearSearchResults();
    } else {
      alert('submit correct data in the form');
    }
  }
}
