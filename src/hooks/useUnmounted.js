import { useEffect, useRef } from "react";

export const useUnmounted = () => {
  const unmounted = useRef(false);
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  return unmounted;
};
