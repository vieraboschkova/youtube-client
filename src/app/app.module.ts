import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SearchFormComponent } from './core/components/search-form/search-form.component';
import { SearchFilterComponent } from './core/components/search-filter/search-filter.component';
import { LoginComponent } from './core/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomColorDirective } from './youtube/directives/bottom-color.directive';
import { UnlessDirective } from './youtube/directives/unless.directive';
import { FilterPipe } from './youtube/pipes/filter.pipe';
import { ShortenTitlePipe } from './youtube/pipes/shorten-title.pipe';
import { SearchResultsService } from './core/services/searchResults.service';
import { Page404Component } from './shared/components/page404/page404.component';
import { LoginBlockComponent } from './auth/components/login-block/login-block.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoComponent } from './youtube/components/detailed-info/detailed-info.component';
import { AuthGuard } from './core/guards/auth.guard'
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module'
@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchItemComponent,
    BottomColorDirective,
    UnlessDirective,
    FilterPipe,
    ShortenTitlePipe,
    Page404Component,
    LoginBlockComponent,
    DetailedInfoComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AuthModule,
  ],
  providers: [SearchResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
