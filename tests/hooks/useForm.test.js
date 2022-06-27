import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm()', () => {
  const initialform = {
    name: 'Diego',
    email: 'diego@email.com',
  };

  test('Debe de regresar la información por defecto', () => {
    const { result } = renderHook(() => useForm(initialform));
    expect(result.current).toEqual({
      name: initialform.name,
      email: initialform.email,
      formState: initialform,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Debe de cambiar el nombre del formulario', () => {
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initialform));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('Debe de realizar el reset del formulario', () => {
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initialform));
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm()
    });

    expect(result.current.name).toBe(initialform.name);
    expect(result.current.formState.name).toBe(initialform.name);
  });
});
