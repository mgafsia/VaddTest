export interface NewsModel {
  title: string;
  urlToImage: string;
  content: string;
  url: string;
  source: SourceModel;
}

export interface newsResultModel {
  articles: NewsModel[];
  status: number;
  totalResults: number;
}

export interface SourceModel {
  id: string;
  name: string;
}

export enum LANGUAGE {
  FR= 'fr',
  EN = 'en'
}
