import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { LoginComponent } from './components/login/login.component'
import { SearchFormComponent } from './components/search-form/search-form.component'
import { SearchFilterComponent } from './components/search-filter/search-filter.component'
import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    SearchFilterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    SearchFormComponent,
    SearchFilterComponent,
    LoginComponent,
  ]
})
export class CoreModule { }
