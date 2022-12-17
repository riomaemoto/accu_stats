import { atom } from "recoil";

export const loginInfoState = atom<string | null>({
  key: "loginInfoState",
  default: null,
});

export const pointerLeftState = atom<string>({
  key: "pointerLeftState",
  default: "",
});
export const pointerRightState = atom<string>({
  key: "pointerRightState",
  default: "",
});
