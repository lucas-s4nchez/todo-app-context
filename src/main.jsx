import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContextProvider";
import GlobalStyles from "./styles/GlobalStyles";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <Navbar />
        <AppRouter />
      </TodoContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);
