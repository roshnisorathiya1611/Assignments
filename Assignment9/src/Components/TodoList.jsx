import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ filter }) => {
  const todos = useSelector(state =>
    state.todos.filter(todo =>
      filter === 'completed' ? todo.completed : !todo.completed
    )
  );

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
