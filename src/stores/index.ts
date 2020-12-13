import { atom, selector } from "recoil";

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

export const todoListFilterState = atom<"All" | "Completed" | "NotCompleted">({
  key: "todoListFilter",
  default: "All",
});

export const filteredTodoListState = selector<Todo[]>({
  key: "filteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Completed":
        return list.filter((item) => item.completed);
      case "NotCompleted":
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStats",
  get: ({ get }) => {
    const list = get(todoListState);
    const all = list.length;
    const completed = list.filter((todo) => todo.completed).length;
    const notCompleted = all - completed;
    const percentCompleted = (all > 0 ? completed / all : 0) * 100;

    return {
      all,
      completed,
      notCompleted,
      percentCompleted,
    };
  },
});
