import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public searchValue: string = '';
  public searchIsSet: boolean = false;
  public showFilter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onSearchClick(): void {
    console.log('clicked search');
    this.searchIsSet = true;
  }

}
