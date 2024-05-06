import { useRef, useCallback } from 'react';

function useThrottle(callback, delay) {
  const lastRan = useRef(Date.now());

  return useCallback(
    (...args) => {
      const now = Date.now();
      if (now - lastRan.current > delay) {
        callback(...args);
        lastRan.current = now;
      }
    },
    [callback, delay]
  );
}

export default useThrottle;
