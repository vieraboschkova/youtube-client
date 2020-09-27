import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import { IconDefiniton } from '@fortawesome/free-brands-svg-icons'
import { LoginService} from '../../../auth/services/login.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements 
  OnInit
  // OnChanges,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy {
  {
  public searchValue: string = '';
  public faYoutube = faYoutube;
  public faFilter = faFilter;
  public data = [];
  @Output() public showFilterEvent = new EventEmitter<void>();
  // @Output() public showResponseEvent = new EventEmitter<string>();
  @ViewChild('searchInput', {static: false}) searchInputValue: ElementRef;
  @ContentChild('filterButton', {static: false}) filterButton: ElementRef;

  constructor(private login: LoginService, private router: Router) {
    // console.log('constructor works!');
  }

  ngOnInit(): void { 
    console.log('ngOnInit works!');
    this.data = this.login.getData();
  }

  public onSearchClick(searchInputValue: HTMLInputElement): void {
    const input = this.searchInputValue.nativeElement.value;
    console.log('clicked search');
    // this.showResponseEvent.emit(input);
    this.searchInputValue.nativeElement.value = '';
    if (!this.data[1]) {
      alert('Log in to see the results');
    } else {
      this.router.navigate(['search'])
    }

  }

  public onFilterClick(): void {
    console.log('clicked filter');
    this.showFilterEvent.emit();
  }
}
