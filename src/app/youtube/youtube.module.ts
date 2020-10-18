import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    DetailedInfoComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      canActivate: [AuthGuard],
      component: SearchResultsComponent},
      {
        path: ':itemId',
        canActivate: [AuthGuard],
        component: DetailedInfoComponent,
      }
    ]),
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    SharedModule,
    DetailedInfoComponent,
  ]
})
export class YoutubeModule { }
