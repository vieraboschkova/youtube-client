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
  public sortType: string;
  public sortWord: string;

  constructor( private search: SearchResultsService) {}
  showResults (keywords) {
    console.log('showing from app' + keywords);
    this.showingResults = true;
  }
  getSortType(type: string){
    console.log('APP knows the type: ' + type);
    this.sortType = type;
  }
  getSortWord(word: string){
    console.log('APP knows the word: ' + word);
    this.sortWord = word;
  }
}
