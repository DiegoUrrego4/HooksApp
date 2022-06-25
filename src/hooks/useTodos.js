import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
