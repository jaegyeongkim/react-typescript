export interface ArticleFormValues {
  title: string;
  content: string;
}

export interface ArticleStorageType {
  [key: string]: ArticleFormValues;
}
