import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PokemonPage, TaskPage } from "../pages";
import { Wrapper } from "../styles/Wrapper";

export const AppRouter = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Wrapper>
  );
};
