import React from "react";
import ReactDOM from "react-dom/client";
import { TodoContextProvider } from "./context/TodoContextProvider";
import { TasksApp } from "./TasksApp";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <TasksApp />
    </TodoContextProvider>
    <GlobalStyles />
  </React.StrictMode>
);
