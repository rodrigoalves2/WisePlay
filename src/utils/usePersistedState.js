import { useEffect, useState } from "react";

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = sessionStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
