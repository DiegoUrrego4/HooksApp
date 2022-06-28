import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
        {id: 1, description: 'TODO #1', done: false},
        {id: 2, description: 'TODO #2', done: true},
        {id: 3, description: 'TODO #3', done: false},
        {id: 4, description: 'TODO #4', done: false},
    ],
    todosCount: 4,
    pendingTodosCount: 3,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('debe de mostrar el componente correctamente', () => {
    render(<TodoApp />);
    expect(screen.getByText('TODO #1')).toBeTruthy()
    expect(screen.getByText('TODO #2')).toBeTruthy()
    expect(screen.getByText('TODO #3')).toBeTruthy()
    expect(screen.getByText('TODO #4')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  });
});
