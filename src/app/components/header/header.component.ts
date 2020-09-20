import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filterDisplay: boolean = false;
  @Output() public showResults = new EventEmitter<string>();
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

}
