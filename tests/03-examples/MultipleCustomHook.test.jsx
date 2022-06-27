import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples';
import { useCounter, useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Quotes'));
    const nextQuotebutton = screen.getByRole('button', { name: 'Next Quote' });

    expect(nextQuotebutton.disabled).toBeTruthy();
  });

  test('Debe de mostrar un Quote y el botón habilitado', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Diego Urrego', quote: '¿Qué se dicen?' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    expect(screen.getByText('¿Qué se dicen?')).toBeTruthy();
    expect(screen.getByText('Diego Urrego')).toBeTruthy();
    const nextQuotebutton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextQuotebutton.disabled).toBeFalsy();
  });

  test('Debe de llamar la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Diego Urrego', quote: '¿Qué se dicen?' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextQuotebutton = screen.getByRole('button', { name: 'Next Quote' });
    fireEvent.click(nextQuotebutton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
