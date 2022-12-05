import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { TodoContextProvider } from "./context/TodoContextProvider";
import { AppRouter } from "./router/AppRouter";
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <TodoContextProvider>
          <Navbar />
          <AppRouter />
        </TodoContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};
