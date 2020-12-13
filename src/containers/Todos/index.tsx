import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "stores";
import { TodoFilter } from "./Filter";
import { TodoItem } from "./Item";
import { NewTodo } from "./New";
import { TodoStats } from "./Stats";

export const Todos = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoFilter />
      <NewTodo />
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoStats />
    </div>
  );
};
