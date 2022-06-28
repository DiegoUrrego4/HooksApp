import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { Homepage } from '../../src/09-useContext/Homepage';

describe('Pruebas en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Diego',
  };

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Homepage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de mostrar el componente CON el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <Homepage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(`${user.id}`)
  });
});
