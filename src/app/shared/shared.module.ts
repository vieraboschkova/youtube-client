// import { } from '';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Page404Component } from './components/page404/page404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { BottomColorDirective } from '../youtube/directives/bottom-color.directive';
import { UnlessDirective } from '../youtube/directives/unless.directive';
import { FilterPipe } from '../youtube/pipes/filter.pipe';
import { ShortenTitlePipe } from '../youtube/pipes/shorten-title.pipe';

@NgModule({
    declarations: [
        // Page404Component,
        BottomColorDirective,
        UnlessDirective,
        FilterPipe,
        ShortenTitlePipe,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        // Page404Component,
        FontAwesomeModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        FormsModule,
        BottomColorDirective,
        UnlessDirective,
        FilterPipe,
        ShortenTitlePipe,
    ]

})


export class SharedModule {

}