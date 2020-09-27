// import { } from '';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Page404Component } from './components/page404/page404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        // Page404Component,
    ],
    imports: [
        CommonModule,
        // FontAwesomeModule,
    ],
    exports: [
        CommonModule,
        // Page404Component,
        // FontAwesomeModule,
    ]

})


export class SharedModule {

}