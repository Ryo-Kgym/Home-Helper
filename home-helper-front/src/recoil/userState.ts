import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";
import { User } from "@domain/model/User";

export const userState = atom<User>({
  key: "user",
  default: {
    userId: "",
    userName: "",
  },
  effects_UNSTABLE: [persist("user").persistAtom],
});
