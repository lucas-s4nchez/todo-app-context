import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoContextProvider = ({ children }) => {
  const {
    tasks,
    taskCount,
    taskPendingCount,
    todoCompleteCount,
    handleNewTask,
    handleDeleteTask,
    handleToggleTask,
  } = useTodo();
  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        taskCount: taskCount,
        taskPendingCount: taskPendingCount,
        todoCompleteCount: todoCompleteCount,
        handleNewTask,
        handleDeleteTask,
        handleToggleTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
