import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../Slice/todo/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
