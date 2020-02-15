export * from './state';

export interface BlogText {
  "id": number;
  "text": string;
  "sub-title": string;
}

export interface Blog {
  "title": string;
  "category": string;
  "items": BlogText[];
}
