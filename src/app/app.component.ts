import { Component, Input } from '@angular/core';
import { SearchResultsService } from './core/services/searchResults.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SearchResultsService]
})
export class AppComponent {
  public title: string = 'youtube-client';
  public showingResults: boolean = false;

  constructor() {}
  showResults(): void {
    console.log('showing from app');
    this.showingResults = true;
  }
}
