import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import {faEye, faHeart, faHeartBroken, faCommentAlt, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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
  public wasSeen: boolean = true;
  @Input() public item: ISearchItem;
  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public getColor(): string {
    let timeDifference: number = <any>new Date() - <any>new Date(this.item.snippet.publishedAt);
    timeDifference = timeDifference / 86400000;
    if (timeDifference < 7) {
      return 'blue';
    } else if (timeDifference < 30) {
      return 'green';
    } else if (timeDifference < 182) {
      return 'yellow';
    } else { return 'red'; }

  }

  public goToDetailsPage(id) {
    // console.log('check the details of: ' + id);
    this.router.navigate(['search', id]);
  }
}
