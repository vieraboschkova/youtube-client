import { Component, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/auth/services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public faUserCircle = faUserCircle;
  public name: string;
  public isLoggedIn: boolean;
  data = [];
  isLoggedFromArray: boolean;
  

  constructor(private router: Router, private login: LoginService, private authService: AuthService) {
   }

  ngOnInit() {
    this.isLoggedIn = this.login.user.isLoggedIn;
    this.name = this.login.getUser();
    this.data = this.login.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes + " changes");
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate(['']);
    this.login.clearData();
    this.login.clearUser();
    localStorage.clear();
  }
}
