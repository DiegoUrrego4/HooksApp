import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage />', () => {
  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el botón', () => {
    const user = { id: 123, name: 'Jennyfer', email: 'jennyfer@google.com' };
    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    const setUserButton = screen.getByRole('button');
    fireEvent.click(setUserButton)
    expect(preTag.innerHTML).toContain(`${user.id}`)
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(user.email)
    expect(setUserMock).toHaveBeenCalledWith(user)
  });
});
