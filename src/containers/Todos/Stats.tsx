import { useRecoilValue } from "recoil";
import { todoListStatsState } from "stores";

export const TodoStats = () => {
  const { all, completed, notCompleted, percentCompleted } = useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>All: {all}</li>
      <li>Completed: {completed}</li>
      <li>NotCompleted: {notCompleted}</li>
      <li>PercentCompleted: {percentCompleted}%</li>
    </ul>
  );
};
