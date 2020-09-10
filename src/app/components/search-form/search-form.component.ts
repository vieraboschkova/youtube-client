import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchValue:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public onSearchClick() {
    console.log('clicked search');
  }

}
