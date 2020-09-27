import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import { response } from '../search-results/response.module';
import {faEye, faHeart, faHeartBroken, faCommentAlt, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faCommentAlt: IconDefinition = faCommentAlt;
  items: ISearchItem[] = response.items;
  // itemId: {id: string};
  currentItem: ISearchItem[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

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
    const id: string = this.route.snapshot.params['itemId'];
    this.currentItem = this.items.filter((item) => {
      // item.id === this.itemId;
      return item.id === id;
    });
    // ADD SERVICE TO DEAL WITH THAT
  }

  onGoBack(){
    this.router.navigate(['search']);
  }

}
