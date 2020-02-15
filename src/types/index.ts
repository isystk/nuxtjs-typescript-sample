export * from './state';

export interface BlogText {
  "subTitle": string;
  "text": string;
}

export interface Blog {
  "id": number;
  "title": string;
  "category": string;
  "items": BlogText[];
}
