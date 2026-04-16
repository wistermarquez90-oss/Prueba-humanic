export interface Article {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  year: number;
  volume: number;
  issue: number;
  tags: string[];
  pdfUrl?: string;
  coverImage?: string;
  doi?: string;
  citations?: number;
}

export interface Author {
  id: string;
  name: string;
  lastName: string;
  title: string;
  specialty: string;
  bio: string;
  photo?: string;
  email?: string;
  orcid?: string;
  articles: string[]; // IDs de artículos
  affiliations: string[];
}

export interface Volume {
  id: string;
  year: number;
  volume: number;
  issue: number;
  title: string;
  description: string;
  coverImage?: string;
  publishedDate: string;
  articleIds: string[];
}
