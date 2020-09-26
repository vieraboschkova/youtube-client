import { Component, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/auth/services/login.service';

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
  

  constructor(private login: LoginService) {
   }

  ngOnInit() {
    this.isLoggedIn = this.login.user.isLoggedIn;
    this.name = this.login.getUser();
    this.data = this.login.getData();
    // console.log('trying' + this.name, this.isLoggedIn);
    // this.isLoggedFromArray = this.data[0];
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes + " changes");
  }

}
