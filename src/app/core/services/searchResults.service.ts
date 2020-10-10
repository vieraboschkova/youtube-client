import { EventEmitter, Injectable } from '@angular/core';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { response } from '../../youtube/components/search-results/response.module';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private APIUrl = 'https://www.googleapis.com/youtube/v3/';
  private APIKey = 'AIzaSyCTtv_h_vJLyF1AJbzQ5seAR-s_6AKcgQk';
  public sortType: string;
  public sortWord: string;
  public increasing: boolean;
  // public searchResponse: ISearchResponse = response;
  // public videosArray: ISearchItem[] = [];
  public videosArray = [];
  public wordWasSet = new Subject<string>();
  public sortWasSet = new Subject<string>();
  public increasingWasSet = new Subject<boolean>();
  public searchWasSet: boolean[] = [false];
  public typedSearchWord =  new Subject<string>();
  public videoIds;
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
    // this.fetchVideos(this.sortWord)
  }
  doNotSearch(){
    this.searchWasSet[0] = false;
  }

  fetchVideos(searchValue: string) {
    console.log(searchValue)
    const url = `${this.APIUrl}search?q=${searchValue}&key=${this.APIKey}&part=snippet&type=video&maxResults=10`;

    this.http
      .get(url)
      .pipe(
        //debounce time?
        map(
          (responseData: ISearchResponse) => {
            console.log(responseData)
            this.videoIds = responseData.items.map((item) => {
              // console.log(this.videoIds)
              return item.id.videoId
            })
            console.log(this.videoIds)
            const videoIdsQuery = this.videoIds.join(',')
            console.log(videoIdsQuery)
            return videoIdsQuery
          }
        ),
        switchMap((response: ISearchResponse) => {
          const urlVideos = `${this.APIUrl}videos?key=${this.APIKey}&id=${response}&part=snippet,statistics`;
          return this.http.get(urlVideos)
            .pipe(
              map(response => {
                this.videosArray = response.items;
                console.log(this.videosArray)
                return this.videosArray
              })
            )
        })
      )  
      .subscribe();
  }
}
