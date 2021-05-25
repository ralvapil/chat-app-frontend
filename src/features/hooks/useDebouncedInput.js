<<<<<<< HEAD
import { useState, useEffect } from "react";

const useDebounce = (fn, delay) => {
=======
import { useState, useEffect } from 'react'

const useDebounce = (fn, delay) => {

>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  let timeout;

  useEffect(() => {
    const timeout = setTimeout(() => {
<<<<<<< HEAD
      fn();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [fn, delay]);
};

export default useDebounce;
=======
      fn()
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [fn, delay]);
}

export default useDebounce;
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
