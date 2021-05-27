import {Component, Input, OnInit} from '@angular/core';
import {NewsModel} from '../../shared/model/news.model';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.scss']
})
export class NewsElementComponent implements OnInit {
  @Input() news: NewsModel;
  urlToImage ='';

  constructor() { }

  ngOnInit(): void {
    this.urlToImage = this.news.urlToImage;
  }
}
