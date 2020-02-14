export * from './state';

export interface DetailItem {
  text: string;
}

export interface News {
  title: string;
  items: DetailItem[];
}
