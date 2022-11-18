import { createContext, useContext, useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

export const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const init = () => JSON.parse(localStorage.getItem("todos")) || [];
export const TodoContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
