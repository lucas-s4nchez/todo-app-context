// import { TaskCountItems } from "./components/TaskCountItems";
import { AddTask } from "./components/addTask/AddTask";
import { TaskCountItems } from "./components/taskCountItems/TaskCountItems";
import { TaskList } from "./components/taskList/TaskList";
import { RowContainerStyled } from "./styles/TodoStyles";

export const TasksApp = () => {
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
