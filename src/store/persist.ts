import { atom } from "recoil";

import { localStorageEffect } from "./hooks";

const ArticleStorageState = atom<{
  [key: string]: { title: string; content: string };
}>({
  key: "ArticleStorageState",
  default: {} as { [key: string]: { title: string; content: string } },
  effects: [
    localStorageEffect<{ [key: string]: { title: string; content: string } }>(
      "ArticleStorageState",
    ),
  ],
});

export { ArticleStorageState };
