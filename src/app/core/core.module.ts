import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SearchFilterComponent,
    SearchFormComponent,
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    SearchFilterComponent,
    SearchFormComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class CoreModule { }
