import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    DetailedInfoComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    SharedModule,
    DetailedInfoComponent,
  ]
})
export class YoutubeModule { }
