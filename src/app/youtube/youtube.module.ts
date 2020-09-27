import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    SharedModule,
  ]
})
export class YoutubeModule { }
