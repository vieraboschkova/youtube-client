import { Component, Input, OnInit } from '@angular/core';
import { SearchResultsService } from './core/services/searchResults.service';
import { LoginService} from './auth/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit{
  public title: string = 'youtube-client';
  // public showingResults: boolean = false;
  public data = [];

  constructor(private login: LoginService) {}

  ngOnInit() {
    this.data = this.login.getData();
  }
}
