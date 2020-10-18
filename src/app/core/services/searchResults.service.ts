import { Injectable } from '@angular/core';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { HttpClient } from '@angular/common/http';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { LoginService } from 'src/app/auth/services/login.service';
import { FilterListenerService } from '../../shared/services/filter-listener.service'
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public increasing: boolean;
  public videosArray = [];
  public videoIds;


  constructor(
    public http: HttpClient, 
    public login: LoginService, 
    public filterListener: FilterListenerService
  ) { }

  logSearch(type: string) {
    console.log('new search type from SERVICE : ' + type);
  }

  getVideos() {
    return this.videosArray;
  }

  clearSearchResults() {
    this.videosArray.length = 0;
  }

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

  fetchVideos(searchValue: string) {
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
      .subscribe(
        response => this.videosArray = response,
        () => alert('Huston, we have a problem! Try again later!')
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
  }
}
