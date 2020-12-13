import { useRecoilValue } from "recoil";
import { todoListState } from "stores";
import { TodoItem } from "./Item";
import { NewTodo } from "./New";

export const Todos = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <NewTodo />
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
