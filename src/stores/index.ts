import { atom } from "recoil";

export const routerState = atom<"Todos">({
  key: "router",
  default: "Todos",
});

export type Todo = {
  id: string;
  value: string;
  completed?: boolean;
};

export const todoListState = atom<Todo[]>({
  key: "todoList",
  default: [],
});
