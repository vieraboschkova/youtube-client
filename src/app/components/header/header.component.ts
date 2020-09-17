import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filterDisplay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  filterToggle() {
    console.log('toggling filter');
    // console.log(showFilter);
    this.filterDisplay = !this.filterDisplay;
  }

}
