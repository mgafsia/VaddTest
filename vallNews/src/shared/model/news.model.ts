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
  category?: string;
  country?: string;
  description?: string;
  language?: string;
  url: string;
}

export interface SourcesResultModel {
  sources: SourceModel[];
  status: number;
}

export enum LANGUAGE {
  FR= 'fr',
  EN = 'en'
}
