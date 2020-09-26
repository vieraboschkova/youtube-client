import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import { response } from '../search-results/response.module';
@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {
  items: ISearchItem[] = response.items;
  // itemId: {id: string};
  currentItem: ISearchItem[];
  constructor(
    private route: ActivatedRoute,
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
  }

}
