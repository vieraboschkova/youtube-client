import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  public sortType: string;
  public sortWord: string;

  constructor() { }

  logSearch(type: string) {
    console.log('new search type from SERVICE : ' + type);
  }

  setType(type: string) {
    this.sortType = type;
    console.log('set type from SERVCE');
  }

  setWord(word: string) {
    this.sortWord = word;
    console.log('set word from SERVCE');
  }
}
