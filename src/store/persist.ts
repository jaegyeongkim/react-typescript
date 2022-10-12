import { atom } from "recoil";

import { initArticleStorage } from "assets/static/persistStorage";
import { localStorageEffect } from "./hooks";

const ArticleStorageState = atom<{
  [key: string]: { title: string; content: string };
}>({
  key: "ArticleStorageState",
  default: initArticleStorage as {
    [key: string]: { title: string; content: string };
  },
  effects: [
    localStorageEffect<{ [key: string]: { title: string; content: string } }>(
      "ArticleStorageState",
    ),
  ],
});

export { ArticleStorageState };
