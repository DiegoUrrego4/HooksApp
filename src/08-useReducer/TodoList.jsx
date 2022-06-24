import { TodoItem } from './';

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};