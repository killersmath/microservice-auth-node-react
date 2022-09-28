import { atom, atomFamily } from "recoil";

export interface TodoContent {
  id: string;
  title: string;
  description: string;
}

export const todoContentState = atom<TodoContent[]>({
  key: "todoContents",
  default: [],
});

export const todoCompleteState = atomFamily<boolean, string>({
  key: "todoCompleteState",
  default: false,
});
