import React from "react";
import { useTodoContext } from "../../context/TodoContextProvider";
import {
  StyledContainerButtons,
  StyledTaskItemButton,
  StyledTaskItemCard,
  StyledTaskItemText,
} from "./TaskItemStyles";

export const TaskItem = ({ task }) => {
  const { dispatch } = useTodoContext();

  const handleDeleteTask = (id) => {
    dispatch({
      type: "Remove Task",
      payload: id,
    });
  };
  const handleToggleTask = (id) => {
    dispatch({
      type: "Toggle Task",
      payload: id,
    });
  };
  return (
    <>
      <StyledTaskItemCard done={task.done}>
        <StyledTaskItemText done={task.done}>
          {task.description}
        </StyledTaskItemText>
        <StyledContainerButtons>
          <StyledTaskItemButton
            delete
            onClick={() => handleDeleteTask(task.id)}
          >
            Eliminar
          </StyledTaskItemButton>
          <StyledTaskItemButton onClick={() => handleToggleTask(task.id)}>
            Completar
          </StyledTaskItemButton>
        </StyledContainerButtons>
      </StyledTaskItemCard>
    </>
  );
};
