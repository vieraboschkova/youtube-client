import { Component, OnInit, Input, Output, OnChanges, OnDestroy } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { response } from './response.module';
import { SearchResultsService} from '../../../core/services/searchResults.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterListenerService } from 'src/app/shared/services/filter-listener.service';

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
  public filterDisplay: boolean
  // public sortBy: string = '';
  // public sortWord: string = '';
  // public sortDirection: boolean = false;
  // public newSearch: boolean;
  public subscriptions: Subscription;
  // public videos: any[];

  constructor(private search: SearchResultsService, private filter: FilterListenerService) {

    this.subscriptions = (this.search.isLoading.subscribe(
      (loading) => this.isLoading = loading
    ))
    this.subscriptions.add(this.filter.filterOn.subscribe(filterOn => {
      this.filterDisplay = filterOn;
    }))
    console.log('constructor works');
  }

  public ngOnInit() {
    console.log('oninit works');
  }

  public ngOnDestroy(): void {
    console.log('ondestroy works');
    if (this.subscriptions) {
      this.subscriptions.unsubscribe()
    }
  }
  ngOnChanges() {
    console.log('CHANGES from search result')
  }
  ngAfterContentChecked() {
    this.itemsArray = this.search.videosArray;
      // console.log(this.itemsArray)
  }
}
