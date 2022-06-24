import { useEffect, useReducer } from 'react';
import { TodoAdd, TodoList, todoReducer } from './';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        Todo App 10, <small>pendientes: 2</small>{' '}
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={(todo) => handleNewTodo(todo)} />
        </div>
      </div>
    </>
  );
};
