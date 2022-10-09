import { atom } from "recoil";

const isModalOpenState = atom({
  key: "isModalOpenState",
  default: false,
});

export { isModalOpenState };
