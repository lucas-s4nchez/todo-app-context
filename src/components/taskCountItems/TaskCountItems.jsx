import { useTodoContext } from "../../context/TodoContextProvider";
import {
  CounterContainerStyled,
  CounterItemStyled,
} from "./TaskCountItemsStyles";

export const TaskCountItems = () => {
  const { tasks } = useTodoContext();

  const taskCount = tasks.length;
  const taskPendingCount = tasks.filter((task) => !task.done).length;
  const todoCompleteCount = tasks.filter((task) => task.done).length;
  return (
    <CounterContainerStyled>
      <CounterItemStyled>Tareas: {taskCount}</CounterItemStyled>

      <CounterItemStyled>Pendientes: {taskPendingCount}</CounterItemStyled>

      <CounterItemStyled>Completadas: {todoCompleteCount}</CounterItemStyled>
    </CounterContainerStyled>
  );
};
