// import { } from '';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottomColorDirective } from '../youtube/directives/bottom-color.directive';
import { UnlessDirective } from '../youtube/directives/unless.directive';
import { FilterPipe } from '../youtube/pipes/filter.pipe';
import { ShortenTitlePipe } from '../youtube/pipes/shorten-title.pipe';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from '../youtube/services/youtube.inteceptor';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
    declarations: [
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
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        LayoutModule,
        // AppRoutingModule,
    ],
    exports: [
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
        MatProgressSpinnerModule,
        FormsModule,
        BottomColorDirective,
        UnlessDirective,
        FilterPipe,
        ShortenTitlePipe,
        ReactiveFormsModule,
        RouterModule,
        LayoutModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true}
    ]

})

export class SharedModule {}
