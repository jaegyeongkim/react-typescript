import { atom } from "recoil";

import { localStorageEffect } from "./hooks";

const ClientLanguage = {
  en: "en",
  ko: "ko",
} as const;

export type ClientLanguageType = keyof typeof ClientLanguage;

const clientLanguageState = atom<ClientLanguageType>({
  key: "clientLanguageState",
  default: "en",
  effects: [localStorageEffect<ClientLanguageType>("clientLanguageState")],
});

export { clientLanguageState };
