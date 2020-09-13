import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { IconDefiniton } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public searchValue: string = '';
  public searchIsSet: boolean = false;
  public showFilter: boolean = false;
  public faYoutube = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

  public onSearchClick(): void {
    console.log('clicked search');
    this.searchIsSet = true;
  }

}
