import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer()', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('Debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Debe de agregar un todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Aprender a probar componentes',
        done: false,
      },
    };
    
    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe de eliminar un todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(0);
  });

  test('Debe de realizar el toggle del todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
