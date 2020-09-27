import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { LoginComponent } from './components/login/login.component'
import { SearchFormComponent } from './components/search-form/search-form.component'
import { SearchFilterComponent } from './components/search-filter/search-filter.component'
import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';

=======
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SharedModule } from '../shared/shared.module';
>>>>>>> 8588f1fc98be25ada05d60ad86ba7ac9c995c404

@NgModule({
  declarations: [
    HeaderComponent,
<<<<<<< HEAD
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
=======
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
>>>>>>> 8588f1fc98be25ada05d60ad86ba7ac9c995c404
  ]
})
export class CoreModule { }
