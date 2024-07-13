import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slice/todo/todosSlice';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="text-center align-items-center mt-2 p-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="button" class="m-2 btn btn-success" onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
