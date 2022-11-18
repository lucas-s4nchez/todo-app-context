import React from "react";
import {
  StyledContainerButtons,
  StyledTaskItemButton,
  StyledTaskItemCard,
  StyledTaskItemText,
} from "./TaskItemStyles";

export const TaskItem = ({ texto, handleDeleteTask, handleToggleTask }) => {
  return (
    <>
      <StyledTaskItemCard>
        <StyledTaskItemText>{texto}</StyledTaskItemText>
        <StyledContainerButtons>
          <StyledTaskItemButton delete onClick={handleDeleteTask}>
            Eliminar
          </StyledTaskItemButton>
          <StyledTaskItemButton onClick={handleToggleTask}>
            Completar
          </StyledTaskItemButton>
        </StyledContainerButtons>
      </StyledTaskItemCard>
    </>
  );
};
