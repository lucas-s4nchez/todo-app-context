import React from "react";
import { useTodoContext } from "../../context/TodoContextProvider";
import { useForm } from "../../hooks/useForm";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledInputContainer,
} from "./AddTaskStyles";

export const AddTask = () => {
  const { handleNewTask } = useTodoContext();
  const { formState, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (formState.description.trim().length < 1) {
      alert("Escribe una tarea");
      return;
    }
    const newTask = {
      id: Date.now(),
      description: formState.description.trim(),
      done: false,
    };
    handleNewTask(newTask);
    onResetForm();
  };

  return (
    <>
      <StyledInputContainer>
        <h2>Agrega una tarea</h2>
        <StyledForm>
          <StyledInput
            type="text"
            name="description"
            value={formState.description}
            onChange={onInputChange}
          />
          <StyledButton onClick={onSubmit} type="submit">
            Agregar
          </StyledButton>
        </StyledForm>
      </StyledInputContainer>
    </>
  );
};
