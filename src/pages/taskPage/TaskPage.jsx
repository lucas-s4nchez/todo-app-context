import { AddTask, TaskCountItems, TaskList } from "../../components";
import { RowContainerStyled } from "../../styles/TodoStyles";

export const TaskPage = () => {
  return (
    <>
      <h1>Todo App</h1>
      <TaskCountItems />
      <RowContainerStyled>
        <AddTask />
        <TaskList />
      </RowContainerStyled>
    </>
  );
};
