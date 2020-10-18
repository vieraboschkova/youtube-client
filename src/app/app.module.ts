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
import { LoginService } from './auth/services/login.service';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    CoreModule,
  ],
  providers: [SearchResultsService, LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
