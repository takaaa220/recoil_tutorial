import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "stores";

export const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as typeof filter);
  };

  return (
    <select value={filter} onChange={handleUpdate}>
      <option value="All">全て</option>
      <option value="Completed">完了済み</option>
      <option value="NotCompleted">未完了</option>
    </select>
  );
};
