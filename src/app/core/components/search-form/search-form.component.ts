import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { LoginService} from '../../../auth/services/login.service';
import { SearchResultsService } from '../../services/searchResults.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public searchValue: string = '';
  public faYoutube = faYoutube;
  public faFilter = faFilter;
  public data = [];
  @Output() public showFilterEvent = new EventEmitter<void>();
  @ViewChild('searchInput', {static: false}) searchInputValue: ElementRef;
  @ContentChild('filterButton', {static: false}) filterButton: ElementRef;

  constructor(
    private login: LoginService, 
    private router: Router,
    private search: SearchResultsService
    ) {
  }

  ngOnInit(): void { 
    this.data = this.login.getData();
  }

  public onSearchClick(): void {
    console.log('clicked search');
    this.searchInputValue.nativeElement.value = '';
    if (!this.data[1]) {
      alert('Log in to see the results');
    } else {
      this.search.getResults()
      this.router.navigate(['search'])
    }
  }

  public onFilterClick(): void {
    console.log('clicked filter');
    if (!this.data[1]) {
      alert('Log in to filter the results');
    } else { this.showFilterEvent.emit(); }
  }
}
