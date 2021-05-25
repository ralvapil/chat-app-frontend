import { useState, useEffect } from 'react';

const useDebounce = (fn, delay) => {
  let timeout;

  useEffect(() => {
    const timeout = setTimeout(() => {
      fn();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [fn, delay]);
};

export default useDebounce;
