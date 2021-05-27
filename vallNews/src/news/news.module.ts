import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsElementComponent } from './news-element/news-element.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        NewsListComponent,
        NewsElementComponent
    ],
    exports: [
        NewsListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class NewsModule { }
