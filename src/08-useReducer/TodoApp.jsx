import { useReducer } from 'react';
import { TodoAdd, TodoList, todoReducer } from './';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del tiempo',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <h1>
        Todo App 10, <small>pendientes: 2</small>{' '}
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} />
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
