import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NewsModule} from '../news/news.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UpdatedInterceptor} from '../core/interceptors/updated-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NewsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: UpdatedInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
