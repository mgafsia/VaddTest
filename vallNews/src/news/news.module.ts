import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsElementComponent } from './news-element/news-element.component';



@NgModule({
    declarations: [
        NewsListComponent,
        NewsElementComponent
    ],
    exports: [
        NewsListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NewsModule { }
