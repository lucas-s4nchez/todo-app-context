import React from "react";
import { useTodoContext } from "../../context/TodoContextProvider";
import { useForm } from "../../hooks/useForm";
import {
  StyledButton,
  StyledContainerFormButtons,
  StyledForm,
  StyledInput,
  StyledInputContainer,
} from "./AddTaskStyles";

export const AddTask = () => {
  const { tasks, dispatch } = useTodoContext();

  const { formState, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const handleNewTask = (task) => {
    dispatch({
      type: "Add Task",
      payload: task,
    });
  };
  const handleDeleteAll = () => {
    dispatch({
      type: "Delete All",
    });
  };
  const isExistingTask = (newTask) =>
    tasks.find(
      (task) =>
        task.description.toLowerCase() === newTask.description.toLowerCase()
    );
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
    const exist = isExistingTask(newTask);

    if (exist) {
      alert("Tarea existente");
      return;
    }
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
          <StyledContainerFormButtons>
            <StyledButton onClick={onSubmit} type="submit">
              Agregar
            </StyledButton>
            {tasks.length > 0 && (
              <StyledButton
                deleteAll
                onClick={() => handleDeleteAll()}
                type="submit"
              >
                Eliminar todas
              </StyledButton>
            )}
          </StyledContainerFormButtons>
        </StyledForm>
      </StyledInputContainer>
    </>
  );
};
