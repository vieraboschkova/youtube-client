import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  public age: number = Math.random() * (500);
  public wasSeen: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public getColor(): string {
    if (this.age < 7) {
      return 'blue';
    } else if (this.age < 30) {
      return 'green';
    } else if (this.age < 182) {
      return 'yellow';
    } else { return 'red'; }

  }
}
