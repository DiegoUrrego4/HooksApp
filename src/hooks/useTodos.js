import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

export const useTodos = (initialState = []) => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    // Para enviar la acción al reducer debemos usar el dispatch
    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: todoId,
    });
  };

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: todoId,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
