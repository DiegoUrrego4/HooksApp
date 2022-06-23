import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  //   const onIncrement = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={ onIncrement } />
    </>
  );
};
