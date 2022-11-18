import React from "react";
import { useTodoContext } from "../../context/TodoContextProvider";
import {
  CounterContainerStyled,
  CounterItemStyled,
} from "./TaskCountItemsStyles";

export const TaskCountItems = () => {
  const { taskCount, taskPendingCount, todoCompleteCount } = useTodoContext();
  return (
    <CounterContainerStyled>
      <CounterItemStyled>Tareas: {taskCount}</CounterItemStyled>

      <CounterItemStyled>Pendientes: {taskPendingCount}</CounterItemStyled>

      <CounterItemStyled>Completadas: {todoCompleteCount}</CounterItemStyled>
    </CounterContainerStyled>
  );
};
