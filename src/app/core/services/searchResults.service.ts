import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  public sortType: string;
  public sortWord: string;
  public increasing: boolean;
  public wordWasSet = new EventEmitter<string>();
  public sortWasSet = new EventEmitter<string>();
  public increasingWasSet = new EventEmitter<boolean>();
  constructor() { }

  logSearch(type: string) {
    console.log('new search type from SERVICE : ' + type);
  }

  setType(type: string) {
    this.sortType === type ? this.increasing = !this.increasing : this.increasing = true;
    this.sortType = type;
    console.log('set type from SERVCE' + this.sortType + this.increasing);
  }

  setWord(word: string) {
    this.sortWord = word;
    console.log('set word from SERVCE' + this.sortWord);
  }


}
