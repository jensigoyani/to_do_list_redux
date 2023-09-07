const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_REQUEST":
      const newArray = [...state.list, action.payload];
      return {
        ...state,
        list: newArray,
      };

    case "DELETE_TODO_REQUEST":
      const filteredArray = state.list.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        list: filteredArray,
      };

    case "REMOVE_ALL_TODO_REQUEST":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducers;
