import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {NewsService} from '../../shared/services/news.service';
import { LANGUAGE, NewsModel, newsResultModel, SourceModel, SourcesResultModel } from '../../shared/model/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  constructor(private newService: NewsService) { }
  allNews: NewsModel[] = [];
  allNews$: Observable<newsResultModel>;
  subject = '';
  selectedLanguage: LANGUAGE = LANGUAGE.FR;
  LANGUAGE = LANGUAGE;
  sources$: Observable<SourcesResultModel>;
  selectedSourceName: string;


  ngOnInit(): void {
    this.search();
    this.sources$ = this.newService.getSources();
  }

  search() {
    this.allNews$ = this.newService.getNews(this.selectedLanguage, this.subject);
  }

  searchForSubject() {
    this.search();
    this.filter();
  }

  changeSubjectLanguage(language: LANGUAGE) {
    this.selectedLanguage = language;
    this.search();
    this.filter();  // todo : remove filter
  }

  filter() {
    this.filterBySource(this.selectedSourceName);
  }

  filterBySource(sourceName: string) { // todo : make it work
    this.selectedSourceName = sourceName;
    if (sourceName) {
      this.allNews = this.allNews.filter(news => news.source && news.source.name === sourceName);
    }
  }
}
