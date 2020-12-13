import { ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";
import { Todo, todoListState } from "stores";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const setTodoList = useSetRecoilState(todoListState);

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoList((current) =>
      current.reduce(
        (acc, t) =>
          t.id === todo.id
            ? [
                ...acc,
                {
                  ...t,
                  value: e.target.value,
                },
              ]
            : [...acc, t],
        [] as Todo[],
      ),
    );
  };

  const handleDelete = () => {
    if (!window.confirm("削除しますか？")) return;

    setTodoList((current) => current.filter((t) => t.id != todo.id));
  };

  const handleToggle = () => {
    setTodoList((current) =>
      current.reduce(
        (acc, t) =>
          t.id === todo.id
            ? [
                ...acc,
                {
                  ...t,
                  completed: !todo.completed,
                },
              ]
            : [...acc, t],
        [] as Todo[],
      ),
    );
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={!!todo.completed} onChange={handleToggle} />
      </label>
      <input type="text" value={todo.value} onChange={handleEdit} />
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};
