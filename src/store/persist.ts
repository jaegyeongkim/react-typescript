import { atom } from "recoil";

import { ArticleStorageType } from "types/article";
import { initArticleStorage } from "assets/static/persistStorage";
import { localStorageEffect } from "./hooks";

const ArticleStorageState = atom<ArticleStorageType>({
  key: "ArticleStorageState",
  default: initArticleStorage as ArticleStorageType,
  effects: [localStorageEffect<ArticleStorageType>("ArticleStorageState")],
});

export { ArticleStorageState };
