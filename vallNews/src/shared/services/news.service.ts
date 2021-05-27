import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { LANGUAGE, newsResultModel, SourceModel, SourcesResultModel } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly TOP_HEADLINES_URI = `${environment.API_URL}/top-headlines`;
  private readonly SOURCES_URI = `${environment.API_URL}/sources`;


  constructor(private readonly http: HttpClient) {
  }

  getNews(language: LANGUAGE, subject = ''): Observable<newsResultModel> {
    let params = new HttpParams().set("language",language).set("q", subject);
    return this.http.get<newsResultModel>(`${this.TOP_HEADLINES_URI}`, {params});
  }

  getSources(): Observable<SourcesResultModel> {
    return this.http.get<SourcesResultModel>(`${this.SOURCES_URI}`);
  }
}
