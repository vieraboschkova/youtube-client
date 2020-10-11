import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import { response } from '../search-results/response.module';
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
  // items: ISearchItem[] = response.items;
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
    ))
   }

  ngOnInit() {
    // this.itemId = {
    //   id: this.route.snapshot.params['itemId'],
    // };
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.item.id = params['itemId'];
    //   }
    // );
    // this.route.paramMap.subscribe(params => {
    //   this.item = response.items[+params.get(itemId)];
    // });
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    console.log(this.itemId)
    this.search.fetchDetailedInfo(this.itemId)
      .subscribe((response: ISearchResponse) => {
          this.currentItem = response.items[0]
          console.log(this.currentItem)
          return this.currentItem
        }
      );
    
    // this.items = this.search.videosArray;
    // const id: string = this.route.snapshot.params['itemId'];
    // this.currentItem = this.items.filter((item) => {
    //   // item.id === this.itemId;
    //   return item.id === id;
    // });
    // ADD SERVICE TO DEAL WITH THAT
  }
  public ngOnDestroy(): void {
    console.log('ondestroy works');
    if (this.subscriptions) {
      this.subscriptions.unsubscribe()
    }
  }

  onGoBack(){
    this.router.navigate(['search']);
  }

}
