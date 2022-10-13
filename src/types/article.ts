export interface ArticleStorageDetailType {
  title: string;
  content: string;
}

export interface ArticleStorageType {
  [key: string]: ArticleStorageDetailType;
}
