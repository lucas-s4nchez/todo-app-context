import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];
export const useTodo = () => {
  const [tasks, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]); //Cada que cambie el estado de todo, se guarda en localStorage

  const handleNewTask = (task) => {
    dispatch({
      type: "Add Task",
      payload: task,
    });
  };

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
  const taskCount = tasks.length;
  const taskPendingCount = tasks.filter((task) => !task.done);
  const todoCompleteCount = tasks.filter((task) => task.done).length;
  return {
    tasks,
    taskCount,
    taskPendingCount,
    todoCompleteCount,
    handleNewTask: handleNewTask,
    handleDeleteTask: handleDeleteTask,
    handleToggleTask: handleToggleTask,
  };
};
