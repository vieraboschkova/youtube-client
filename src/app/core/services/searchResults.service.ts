import { EventEmitter, Injectable } from '@angular/core';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { response } from '../../youtube/components/search-results/response.module';
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  public sortType: string;
  public sortWord: string;
  public increasing: boolean;
  public searchResponse: ISearchResponse = response;
  public wordWasSet = new EventEmitter<string>();
  public sortWasSet = new EventEmitter<string>();
  public increasingWasSet = new EventEmitter<boolean>();
  public searchWasSet: boolean[] = [false];
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

  getResults(){
    this.searchWasSet[0] = true;
  }
  doNotSearch(){
    this.searchWasSet[0] = false;
  }

}
