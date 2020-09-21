import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import { IconDefiniton } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  public searchValue: string = '';
  // public searchIsSet: boolean = false;
  // public showFilter: boolean = false;
  public faYoutube = faYoutube;
  public faFilter = faFilter;
  @Output() public showFilterEvent = new EventEmitter<void>();
  @Output() public showResponseEvent = new EventEmitter<string>();
  @ViewChild('searchInput', {static: false}) searchInputValue: ElementRef;
  @ContentChild('filterButton', {static: false}) filterButton: ElementRef;

  // constructor() { 
  //   console.log('constructor works!');
  // }

  ngOnInit(): void { 
    console.log('ngOnInit works!');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges works!');
  //   console.log(changes);
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck works!');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit works!');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked works!');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit works!');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked works!');
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy works!');
  // }

  public onSearchClick(searchInputValue: HTMLInputElement): void {
    const input = this.searchInputValue.nativeElement.value;
    console.log('clicked search');
    // this.searchIsSet = false;
    this.showResponseEvent.emit(input);
    this.searchInputValue.nativeElement.value = '';
  }

  public onFilterClick(): void {
    console.log('clicked filter');
    // this.showFilter = !this.showFilter;
    this.showFilterEvent.emit();
  }

}
