import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  hide = true;
  options: FormGroup;
  username: string;
  token: string;
  // @ViewChild('username', {static: false}) userInput: ElementRef;
  // @ViewChild('password', {static: false}) passwordInput: ElementRef;
  // constructor() { }
  constructor(
    fb: FormBuilder,
    private login: LoginService,
    private router: Router,
    private authService: AuthService,
    ) {
      this.options = fb.group({
      });
  }

  ngOnInit(): void {
    // this.username = this.login.getUser();
    // this.token = this.login.token;
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
    console.log(login.value, password.value);
    this.checkLocalStorage(login.value, password.value);
    this.login.setLogin(login.value, password.value);
    if (this.login.user.isLoggedIn === true) {
      console.log('You are logged in');
      this.authService.login();
      localStorage.setItem('user', login.value);
      localStorage.setItem('password', password.value);
      this.router.navigate(['/search']);
    } else { alert('Invalid data'); }

  }

  checkLocalStorage(username: string, password: string) {
    console.log(localStorage.getItem('user'));
    console.log(localStorage.getItem('password'));
    if (localStorage.getItem('user') === username) {
      console.log('same users');
      /*TOKEN*/
    }
  }
}
