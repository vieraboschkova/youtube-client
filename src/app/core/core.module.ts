import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../core/components/header/header.component';
import { SearchFormComponent } from '../core/components/search-form/search-form.component';
import { SearchFilterComponent } from '../core/components/search-filter/search-filter.component';
import { LoginComponent } from '../core/components/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    SearchFilterComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    SearchFormComponent,
    SearchFilterComponent,
    LoginComponent,
    SharedModule,
  ]
})
export class CoreModule { }
