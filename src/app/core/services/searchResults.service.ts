import { EventEmitter, Injectable } from '@angular/core';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { response } from '../../youtube/components/search-results/response.module';
import { HttpClient } from '@angular/common/http';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { LoginService } from 'src/app/auth/services/login.service';
import { FilterListenerService } from '../../shared/services/filter-listener.service'
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  // private APIUrl = 'https://www.googleapis.com/youtube/v3/';
  // private APIKey = 'AIzaSyCTtv_h_vJLyF1AJbzQ5seAR-s_6AKcgQk';
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // public sortType: string;
  // public sortWord: string;
  public increasing: boolean;
  // public searchResponse: ISearchResponse = response;
  // public videosArray: ISearchItem[] = [];
  public videosArray = [];
  // public wordWasSet = new Subject<string>();
  // public sortWasSet = new Subject<string>();
  // public increasingWasSet = new Subject<boolean>();
  // public searchWasSet: boolean[] = [false];
  // public typedSearchWord =  new Subject<string>();
  public videoIds;


  constructor(
    public http: HttpClient, 
    public login: LoginService, 
    public filterListener: FilterListenerService
  ) { }

  logSearch(type: string) {
    console.log('new search type from SERVICE : ' + type);
  }

  // setType(type: string) {
    // this.sortType === type ? this.increasing = !this.increasing : this.increasing = true;
    // this.sortType = type;
    // console.log('set type from SERVCE' + this.sortType + this.increasing);
  // }

  // setWord(word: string) {
  //   this.sortWord = word;
  //   console.log('set word from SERVCE' + this.sortWord);
  // }

  // getResults(){
  //   this.searchWasSet[0] = true;
  //   // this.fetchVideos(this.sortWord)
  // }
  getVideos() {
    return this.videosArray;
  }

  clearSearchResults() {
    this.videosArray.length = 0;
  }

  // doNotSearch(){
  //   this.searchWasSet[0] = false;
  // }
/** */

  sortByDateFromNewest (a, b) {
    return <any>new Date(b.snippet.publishedAt) - <any>new Date(a.snippet.publishedAt);
  }

  sortByDateFromOldest (a, b) {
    return <any>new Date(a.snippet.publishedAt) - <any>new Date(b.snippet.publishedAt);
  }

  sortByMostViews (a, b) {
    return a.statistics.viewCount - b.statistics.viewCount;
  }

  sortByLeastViews (a, b) {
    return b.statistics.viewCount - a.statistics.viewCount;
  }

  sortArrayOfResults(sortType, sortDown, sortWord) {
    // this.newSearch = false;
    // console.log(' FROM RESULTS');
    // console.log(this.sortBy, this.sortWord, this.sortDirection);
    switch (sortType) {
      case 'date':
        if (sortDown === true)
          {this.videosArray.sort(this.sortByDateFromNewest);} else
          {this.videosArray.sort(this.sortByDateFromOldest);}
        break;
      case 'view':
        if (sortDown === true) {
          this.videosArray.sort(this.sortByLeastViews);
        } else {this.videosArray.sort(this.sortByMostViews); }
        break;
      case 'word':
        const givenString: string = sortWord;
        if (givenString.length < 0 || !givenString) {
          // console.log('no string');
          // break;
        } else {
          let filteredResults: ISearchItem[];
          filteredResults = this.videosArray.filter(function (item) {
            return item.snippet.tags.includes(givenString);
            }
          );
          // console.log('sort by words END');
          this.videosArray = filteredResults;
        }
        break;
      default:
        console.log('new responses');
        break;
    }
  }

/** */
  fetchVideos(searchValue: string) {
    // this.login.currentUser.pipe(take(1)).subscribe(user => {
    //   console.log(user)
    // })
    console.log(searchValue)
    const url = `search?q=${searchValue}&part=snippet&type=video&maxResults=10`;
    this.isLoading.next(true);
    this.http
      .get(url)
      .pipe(
        debounceTime(500),
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
        switchMap((responseData) => {
          const urlVideos = `videos?id=${responseData}&part=snippet,statistics`;
          return this.http
            .get(urlVideos)
            .pipe(
              map((response: ISearchResponse) => {
                this.videosArray = response.items;
                console.log(this.videosArray)
                return this.videosArray
              })
            )
        }),
        take(1),
        finalize(() => this.isLoading.next(false))
      )
      // .subscribe(response => {
      //   this.videosArray = response,
      .subscribe(
        response => this.videosArray = response,
        // response => console.log('success', response),
        error => alert('Huston, we have a problem! Try again later!')
      // });
      )
  }

  fetchDetailedInfo(videoId: string) {
    const url = `videos?id=${videoId}&part=snippet,statistics`;
    this.isLoading.next(true);
    return this.http
      .get(url)
      .pipe(
        map((response: ISearchResponse) => {
          console.log(response)
          return response;
        }),
        take(1),
        finalize(() => this.isLoading.next(false))
      )
      // .subscribe(
      //   response => console.log('success', res),
      //   error => console.log('oops', error)
      // )
  }
}
