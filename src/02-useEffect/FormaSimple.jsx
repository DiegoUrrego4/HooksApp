import { useEffect, useState } from 'react';
import { Message } from './Message';

export const FormaSimple = () => {
  const [formState, setFormState] = useState({
    username: 'eneas21',
    email: 'diegourrg@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

  return (
    <>
      <h1>Forma Simple</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      {username === 'eneas21' && <Message />}

      <input
        type='email'
        className='form-control mt-2'
        placeholder='example@mail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
