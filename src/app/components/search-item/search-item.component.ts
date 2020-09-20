import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';
import {faEye, faHeart, faHeartBroken, faCommentAlt, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faCommentAlt: IconDefinition = faCommentAlt;
  public age: number = Math.random() * (500);
  public wasSeen: boolean = true;
  @Input() public item: ISearchItem;
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
