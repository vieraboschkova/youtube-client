import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public showingResults: boolean = false;

  showResults (keywords) {
    console.log('showing from app' + keywords);
    this.showingResults = true;
  }
}
