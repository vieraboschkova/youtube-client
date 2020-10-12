import { Component, OnInit, Input, Output, OnChanges, OnDestroy } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { response } from './response.module';
import { SearchResultsService} from '../../../core/services/searchResults.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy, OnChanges {
  // public searchResponse: ISearchResponse = this.search.searchResponse;
  public searchResponse;
  // public itemsArray: ISearchItem[] = this.searchResponse.items;
  public itemsArray: ISearchItem[];
  // public totalResults: number = this.searchResponse.pageInfo.totalResults;
  public totalResults: number;
  // public resultsPerPage: number = this.searchResponse.pageInfo.resultsPerPage;
  public resultsPerPage: number;
  public isLoading: boolean;
  public sortBy: string = '';
  public sortWord: string = '';
  public sortDirection: boolean = false;
  public newSearch: boolean;
  public subscriptions: Subscription;
  public videos: any[];
  // unsubscribe$: Subject<any> = new Subject();

  constructor(private search: SearchResultsService) {
    // this.subscriptions = this.search.sortWasSet.subscribe(
    //   (sort) => this.sortBy = sort
    // )

    // this.subscriptions.add(this.search.wordWasSet.subscribe(
    //   (word) => this.sortWord = word
    // ))

    // this.subscriptions.add(this.search.increasingWasSet.subscribe(
    //   (increasing) => this.sortDirection = increasing
    // ))

    this.subscriptions = (this.search.isLoading.subscribe(
      (loading) => this.isLoading = loading
    ))

    console.log('constructor works');
    
  }

  public ngOnInit() {
    console.log('oninit works');
    // this.itemsArray = this.search.getVideos();
    // this.itemsArray = this.search.videosArray;
  }

  public ngOnDestroy(): void {
    console.log('ondestroy works');
    if (this.subscriptions) {
      this.subscriptions.unsubscribe()
    }
  }

  // sortByDateFromNewest (a, b) {
  //   return <any>new Date(b.snippet.publishedAt) - <any>new Date(a.snippet.publishedAt);
  // }

  // sortByDateFromOldest (a, b) {
  //   return <any>new Date(a.snippet.publishedAt) - <any>new Date(b.snippet.publishedAt);
  // }

  // sortByMostViews (a, b) {
  //   return a.statistics.viewCount - b.statistics.viewCount;
  // }

  // sortByLeastViews (a, b) {
  //   return b.statistics.viewCount - a.statistics.viewCount;
  // }

  // sortArrayOfResults() {
  //   // this.newSearch = false;
  //   // console.log(' FROM RESULTS');
  //   // console.log(this.sortBy, this.sortWord, this.sortDirection);
  //   switch (this.sortBy) {
  //     case 'date':
  //       if (this.search.increasing === true)
  //         {this.itemsArray.sort(this.sortByDateFromNewest);} else
  //         {this.itemsArray.sort(this.sortByDateFromOldest);}
  //       break;
  //     case 'view':
  //       if (this.search.increasing === true) {
  //         this.itemsArray.sort(this.sortByLeastViews);
  //       } else {this.itemsArray.sort(this.sortByMostViews); }
  //       break;
  //     case 'word':
  //       const givenString: string = this.sortWord;
  //       if (givenString.length < 0 || !givenString) {
  //         // console.log('no string');
  //         // break;
  //       } else {
  //         let filteredResults: ISearchItem[];
  //         filteredResults = this.itemsArray.filter(function (item) {
  //           return item.snippet.tags.includes(givenString);
  //           }
  //         );
  //         // console.log('sort by words END');
  //         this.itemsArray = filteredResults;
  //       }
  //       break;
  //     default:
  //       console.log('new responses');
  //       break;
  //   }
  // }
  ngOnChanges() {
    console.log('CHANGES from search result')
  }
  ngAfterContentChecked() {
    
    this.itemsArray = this.search.videosArray;
    // this.sortArrayOfResults();
    // console.log(this.sortWord)
    // console.log('NEW search: ' + this.search.searchWasSet[0]);
    // if (this.search.searchWasSet[0] === true) {
      // this.itemsArray = this.searchResponse.items; //CAHNGE
      
      console.log(this.itemsArray)
      // console.log('new search: ' + this.search.searchWasSet[0])
    }
  // }
}
