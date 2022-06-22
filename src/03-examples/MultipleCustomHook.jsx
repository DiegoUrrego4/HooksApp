import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{quote}</p>
          <footer className='blockquote-footer mt-2'>{author}</footer>
        </blockquote>
      )}

      {counter > 1 && (
        <button
          className='btn btn-primary'
          disabled={isLoading}
          onClick={() => decrement()}
        >
          Previous Quote
        </button>
      )}

      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
