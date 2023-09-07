export const addTodo = (data) => {
  return {
    type: "ADD_TODO_REQUEST",
    payload: {
      id: new Date().getSeconds(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO_REQUEST",
    payload: {
      id: id,
    },
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_ALL_TODO_REQUEST",
  };
};
