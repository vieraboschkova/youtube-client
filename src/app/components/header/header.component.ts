import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filterDisplay: boolean = false;
  @Output() public showResults = new EventEmitter<string>();
  @Output() public sortTypeEvent = new EventEmitter<string>();
  @Output() public sortWordEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterToggle() {
    console.log('toggling filter');
    // console.log(showFilter);
    this.filterDisplay = !this.filterDisplay;
  }
  showResponse (keywords: string): void {
    console.log('showing response' + keywords);
    this.showResults.emit(keywords);
  }

  sortByType(type: string) {
    console.log('hello from header :' + type);
    this.sortTypeEvent.emit(type);
  }
  sortByWord(word: string) {
    console.log('hello from header :' + word);
    this.sortWordEvent.emit(word);
  }

}
