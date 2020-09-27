import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBlockComponent } from './auth/components/login-block/login-block.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Page404Component } from './shared/components/page404/page404.component';
import { DetailedInfoComponent } from './youtube/components/detailed-info/detailed-info.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginBlockComponent },
  { path: 'search', canActivate: [AuthGuard], component: SearchResultsComponent },
  { path: 'search/:itemId', canActivate: [AuthGuard], component: DetailedInfoComponent },
  // { path: 'search/**', component: Page404Component },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
