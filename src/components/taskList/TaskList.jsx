import { useTodoContext } from "../../context/TodoContextProvider";
import { TaskItem } from "../taskItem/TaskItem";
import { StyledContainerList, StyledMessage } from "./TaskListStyles";

export const TaskList = () => {
  const { tasks } = useTodoContext();
  return (
    <>
      <StyledContainerList>
        {tasks && tasks.length === 0 && (
          <StyledMessage>No hay tareas por hacer</StyledMessage>
        )}
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task, index) => <TaskItem key={index} task={task} />)}
      </StyledContainerList>
    </>
  );
};
