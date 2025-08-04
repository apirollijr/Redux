import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, text: newText },
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
