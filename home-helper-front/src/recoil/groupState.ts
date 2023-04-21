import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";
import { User } from "@domain/model/User";
import { Group } from "@domain/model/Group";

export const groupState = atom<Group>({
  key: "group",
  default: {
    id: "",
    name: "",
  },
  effects_UNSTABLE: [persist("group").persistAtom],
});
