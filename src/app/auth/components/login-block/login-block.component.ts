import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, NgForm} from '@angular/forms';
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
  // constructor() { }
  constructor(fb: FormBuilder, private login: LoginService) {
    this.options = fb.group({
    });
    this.login.isloggedIn.subscribe(
      (name) => this.username
    )
  }

  ngOnInit(): void {
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

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    this.login.logger('someuser');
  }

}
