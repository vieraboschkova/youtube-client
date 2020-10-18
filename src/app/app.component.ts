import { Component, OnInit } from '@angular/core';
import { LoginService} from './auth/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  public title: string = 'youtube-client';
  public data = [];

  constructor(private login: LoginService) {}

  public ngOnInit() {
    this.data = this.login.getData();
  }
}
