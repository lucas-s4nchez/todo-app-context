import { useTodoContext } from "../../context/TodoContextProvider";
import { TaskItem } from "../taskItem/TaskItem";
import { StyledContainerList } from "./TaskListStyles";

export const TaskList = () => {
  const { tasks, handleDeleteTask, handleToggleTask } = useTodoContext();
  return (
    <>
      <StyledContainerList>
        {tasks && tasks.length === 0 && <div>No hay tareas</div>}
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task, index) => (
            <TaskItem
              key={index}
              texto={task.description}
              handleDeleteTask={handleDeleteTask}
              handleToggleTask={handleToggleTask}
            />
          ))}
      </StyledContainerList>
    </>
  );
};
