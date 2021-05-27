import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NewsService} from '../../shared/services/news.service';
import {LANGUAGE, NewsModel} from '../../shared/model/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
  subscriptions$: Array<Subscription> = [];
  constructor(private newService: NewsService) { }
  allNews: NewsModel[] = [];

  ngOnInit(): void {
    this.subscriptions$.push(this.newService.getNews(LANGUAGE.FR).subscribe(response => {
      this.allNews = response.articles;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions$.filter(subscription => !!subscription).forEach(subscription => subscription.unsubscribe());
  }

}
