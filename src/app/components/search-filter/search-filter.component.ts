import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  public sortingOption: string = '';
  public sortingKeyword: string = '';
  @ViewChild ('filterWord', {static: false}) sortWordInput: ElementRef;
  @Output() public sortingTypeEvent = new EventEmitter<string>();
  @Output() public sortingWordEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelectSortType(sortType: string, word?: string) {
    this.sortingOption = sortType;
    this.sortingKeyword = word;
    console.log(sortType);
    console.log(word);
    this.sortingTypeEvent.emit(sortType);
    this.sortingWordEvent.emit(word);
    this.sortWordInput.nativeElement.value = '';
  }
}
