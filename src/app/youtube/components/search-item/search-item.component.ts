import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
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
  // public age: number = Math.random() * (500);
  public wasSeen: boolean = true;
  @Input() public item: ISearchItem;
  constructor() { }
 
  public ngOnInit(): void {
  }

  public getColor(): string {
    let timeDifference: number = <any>new Date() - <any>new Date(this.item.snippet.publishedAt)  
    timeDifference = timeDifference / 86400000;
    if (timeDifference < 7) {
      return 'blue';
    } else if (timeDifference < 30) {
      return 'green';
    } else if (timeDifference < 182) {
      return 'yellow';
    } else { return 'red'; }

  }
}
