const INCREASE = "todos/INCREASE";
const REMOVE = "todos/DECREASE";
const CHANGE = "todos/CHANGE";

export const insert = (todo) => ({ type: INCREASE, todo });

export const remove = (id) => ({ type: REMOVE, id });

export const change = (text) => ({ type: CHANGE, text });

const initialState = {
  text: "",
  todos: [
    { id: 1, todo: "JavaScript" },
    { id: 2, todo: "CSS공부" },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        text: action.text,
      };
    case INCREASE:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case REMOVE:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    default:
      return state;
  }
};
export default todos;
