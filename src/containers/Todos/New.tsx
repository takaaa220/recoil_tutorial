import { FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "stores";

export const NewTodo = () => {
  const [value, setValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTodoList((current) => [
      ...current,
      {
        id: getId().toString(),
        value,
      },
    ]);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
};

let id = 0;
function getId() {
  return id++;
}
