import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { SearchResultsService} from '../../../core/services/searchResults.service';
import { Subscription } from 'rxjs';
import { FilterListenerService } from 'src/app/shared/services/filter-listener.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy, OnChanges {
  public searchResponse;
  public itemsArray: ISearchItem[];
  public totalResults: number;
  public resultsPerPage: number;
  public isLoading: boolean;
  public filterDisplay: boolean;
  public subscriptions: Subscription;

  constructor(private search: SearchResultsService, private filter: FilterListenerService) {

    this.subscriptions = (this.search.isLoading.subscribe(
      (loading) => this.isLoading = loading
    ));
    this.subscriptions.add(this.filter.filterOn.subscribe(filterOn => {
      this.filterDisplay = filterOn;
    }));
    console.log('constructor works');
  }

  public ngOnInit() {
    console.log('oninit works');
  }

  public ngOnDestroy(): void {
    console.log('ondestroy works');
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  public ngOnChanges() {
    console.log('CHANGES from search result');
  }
  public ngAfterContentChecked() {
    this.itemsArray = this.search.videosArray;
      // console.log(this.itemsArray)
  }
}
