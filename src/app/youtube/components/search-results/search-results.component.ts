import { Component, OnInit, Input, Output } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { response } from './response.module'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchResponse: ISearchResponse = response;
  public itemsArray: ISearchItem[] = this.searchResponse.items;
  public totalResults: number = this.searchResponse.pageInfo.totalResults;
  public resultsPerPage: number = this.searchResponse.pageInfo.resultsPerPage;
  public sortBy: string = '';
  @Input() public sortType: string;
  @Input() public sortWords: string;

  constructor() { }

  public ngOnInit(): void {
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

  lookForWord (a) {
    console.log(a.snippet.tags);
    // console.log("the key words: " + this.sortWords);
    // const tagsArray: string[] = a.snippet.tags;
    // if (tagsArray.includes(this.sortWords)) {
    //   console.log('GOT IT');
    // } else { console.log('NO MATCHES'); }
  }

  ngOnChanges(){
    console.log(this.sortType);
    if (this.sortType === 'date') {
      this.itemsArray.sort(this.sortByDateFromNewest);
    } else if (this.sortType === 'dateDown') {
      this.itemsArray.sort(this.sortByDateFromOldest);
    } else if (this.sortType === 'view') {
      this.itemsArray.sort(this.sortByLeastViews);
    } else if (this.sortType === 'viewDown') {
      this.itemsArray.sort(this.sortByMostViews);
    } else if (this.sortType === 'word') {
      console.log('sort by words');
      console.log(this.sortWords);
      // this.itemsArray.filter(this.lookForWord);
      this.itemsArray.filter(
        (item) => item.snippet.tags.includes('angular')
      );
      console.log('sort by words END');
      
    }
  }

}
