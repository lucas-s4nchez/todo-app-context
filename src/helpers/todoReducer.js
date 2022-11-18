export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "Add Task":
      return [...initialState, action.payload];
    case "Remove Task":
      return initialState.filter((task) => task.id !== action.payload);
    case "Toggle Task":
      return initialState.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    case "Delete All":
      return [];
    default:
      return initialState;
  }
};
