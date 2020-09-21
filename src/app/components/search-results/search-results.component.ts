import { Component, OnInit, Input, Output } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from 'src/app/models/search-item.model';
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

  constructor() { }

  public ngOnInit(): void {
  }

  sortFunction (a, b) {
    return <any>new Date(b.snippet.publishedAt) - <any>new Date(a.snippet.publishedAt);
  }

}
