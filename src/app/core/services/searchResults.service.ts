import { EventEmitter, Injectable } from '@angular/core';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { response } from '../../youtube/components/search-results/response.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  public sortType: string;
  public sortWord: string;
  public increasing: boolean;
  public searchResponse: ISearchResponse = response;
  public wordWasSet = new Subject<string>();
  public sortWasSet = new Subject<string>();
  public increasingWasSet = new Subject<boolean>();
  public searchWasSet: boolean[] = [false];
  googleAPIKey = 'AIzaSyCTtv_h_vJLyF1AJbzQ5seAR-s_6AKcgQk';

  constructor(public http: HttpClient) { }

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

  getVideosForChannel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + 
    this.googleAPIKey + '&channelId=' + 
    channel + '&order=date&part=snippet &type=video,id&maxResults=' + 
    maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
