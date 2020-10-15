import { useState } from "react";

function useToggleState(initVal = false) {
  const [state, setState] = useState(initVal);
  const toggle = () => setState((st) => !st);

  return [state, toggle];
}

export default useToggleState;
