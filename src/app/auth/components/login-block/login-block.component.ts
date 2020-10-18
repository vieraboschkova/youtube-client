import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { OnDestroy, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginService} from '../../services/login.service';
import { googleAPIKey, clientID } from '../../../../assets/googleAPIKey'
import { SearchResultsService } from 'src/app/core/services/searchResults.service';
@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit, OnDestroy {
  private subscriptionToLogger: Subscription;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(2)]);
  hide = true;
  options: FormGroup;
  username: string;
  token: string;
  loggedIn: boolean = false;
  
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

  ngOnInit(): void {
    this.subscriptionToLogger = this.authService.wasAuthorized.subscribe(didLog => {
      this.loggedIn = didLog;
    })
    console.log('checking for user');
    if (this.checkLocalStorage()) {
      console.log('got a user')
    } else { console.log('aint got a user')}

  }
  ngOnDestroy(): void {
    this.subscriptionToLogger.unsubscribe()
  }
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  onSubmit(login: HTMLInputElement, password: HTMLInputElement) {
    if (login.value !== '' && password.value !== '') {
      this.authService.wasAuthorized.next(true);
      this.login.setLogin(login.value);
      console.log('You are logged in');
      this.authService.login();
      localStorage.setItem('user', login.value);
      this.router.navigate(['/search']);
    } else { alert('Invalid data'); }

  }

  checkLocalStorage() {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      console.log('there was a user');
      return true;
      /*TOKEN*/
    } else { return false; }
  }
  
  onFetch(searchValue: string){
    this.search.fetchVideos(searchValue)
    console.log('trying to fetch')
  }
}
