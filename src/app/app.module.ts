import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchResultsService } from './core/services/searchResults.service';
import { Page404Component } from './shared/components/page404/page404.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    CoreModule,
    // YoutubeModule,
    // AuthModule,
  ],
  providers: [SearchResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
