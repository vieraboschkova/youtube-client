import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginService} from '../../services/login.service';
import { SearchResultsService } from 'src/app/core/services/searchResults.service';
@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit, OnDestroy {
  private subscriptionToLogger: Subscription;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required, Validators.minLength(2)]);
  public hide = true;
  public options: FormGroup;
  public username: string;
  public token: string;
  public loggedIn: boolean = false;

  constructor(
    fb: FormBuilder,
    private login: LoginService,
    private search: SearchResultsService,
    private router: Router,
    private authService: AuthService,
    ) {
      this.options = fb.group({
      });
  }

  public ngOnInit(): void {
    this.subscriptionToLogger = this.authService.wasAuthorized.subscribe(didLog => {
      this.loggedIn = didLog;
    });
    // console.log('checking for user');
    if (this.checkLocalStorage()) {
      // console.log('got a user');
    } else { console.log('aint got a user'); }

  }
  public ngOnDestroy(): void {
    this.subscriptionToLogger.unsubscribe();
  }
  public getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  public onSubmit(login: HTMLInputElement, password: HTMLInputElement) {
    if (login.value !== '' && password.value !== '') {
      this.authService.wasAuthorized.next(true);
      this.login.setLogin(login.value);
      // console.log('You are logged in');
      this.authService.login();
      localStorage.setItem('user', login.value);
      this.router.navigate(['/search']);
    } else { alert('Invalid data'); }

  }

  public checkLocalStorage() {
    // console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      // console.log('there was a user');
      return true;
      /*TOKEN*/
    } else { return false; }
  }

  public onFetch(searchValue: string) {
    this.search.fetchVideos(searchValue);
    console.log('trying to fetch');
  }
}
