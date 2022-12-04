import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PokemonPage, TaskPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
