import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NewsService} from '../../shared/services/news.service';
import { LANGUAGE, NewsModel, SourceModel } from '../../shared/model/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
  subscriptions$: Array<Subscription> = [];
  constructor(private newService: NewsService) { }
  allNews: NewsModel[] = [];
  subject = '';
  selectedLanguage: LANGUAGE = LANGUAGE.FR;
  LANGUAGE = LANGUAGE;
  sources: SourceModel[] = [];
  selectedSourceName: string;


  ngOnInit(): void {
    this.search(this.subject, this.selectedLanguage, this.selectedSourceName);
    this.getSourcesList();
  }

  search(subject: string, language: LANGUAGE, source: string) {
    this.subscriptions$.push(this.newService.getNews(language, subject).subscribe(response => {
      this.allNews = response.articles;
    }));
  }

  getSourcesList() {
    this.subscriptions$.push(this.newService.getSources().subscribe(response => {
      this.sources = response.sources;
    }));
  }

  searchForSubject() {
    this.search(this.subject, this.selectedLanguage, this.selectedSourceName);
    this.filter();
  }

  changeSubjectLanguage(language: LANGUAGE) {
    this.selectedLanguage = language;
    this.search(this.subject, language, this.selectedSourceName);
    this.filter();
  }

  filter() {
    this.filterBySource(this.selectedSourceName);
  }

  filterBySource(sourceName: string) {
    this.selectedSourceName = sourceName;
    if (sourceName) {
      this.allNews = this.allNews.filter(news => news.source && news.source.name === sourceName);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions$.filter(subscription => !!subscription).forEach(subscription => subscription.unsubscribe());
  }

}
