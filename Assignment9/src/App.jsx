import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="text-center">Todo App</h1>
        <TodoInput />
        <h2 className="text-center">Pending Todos</h2>
        <TodoList filter="pending" />
        <h2 className="text-center">Completed Todos</h2>
        <TodoList filter="completed" />
      </div>
    </Provider>
  );
};

export default App;
