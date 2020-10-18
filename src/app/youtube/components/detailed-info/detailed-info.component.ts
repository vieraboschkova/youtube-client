import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import {faEye, faHeart, faHeartBroken, faCommentAlt, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { SearchResultsService } from 'src/app/core/services/searchResults.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit, OnDestroy {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faCommentAlt: IconDefinition = faCommentAlt;
  public items: ISearchItem[];
  public subscriptions: Subscription;
  public isLoading: boolean;
  public itemId: string;
  public currentItem: ISearchItem;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchResultsService
  ) {
    this.subscriptions = (this.search.isLoading.subscribe(
      (loading) => this.isLoading = loading
    ));
   }

  public ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    console.log(this.itemId);
    this.search.fetchDetailedInfo(this.itemId)
      .subscribe((response: ISearchResponse) => {
          this.currentItem = response.items[0];
          console.log(this.currentItem);
          return this.currentItem;
        },
                 (error => console.log(error))
      );
  }
  public ngOnDestroy(): void {
    console.log('ondestroy works');
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  public onGoBack() {
    this.router.navigate(['search']);
  }

}
