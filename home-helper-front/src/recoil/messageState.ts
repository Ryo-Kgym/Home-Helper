import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";
import { Group } from "@domain/model/Group";

export const messageState = atom<string[]>({
  key: "message",
  default: [],
  effects_UNSTABLE: [persist("message").persistAtom],
});
