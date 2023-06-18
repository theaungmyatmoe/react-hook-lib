import {useCallback, useState} from "react";

export const useBoolean = () => {
  const [boolean, setBoolean] = useState(false)

  const toggle = useCallback(() => {
    setBoolean(bool => !bool);
  }, [booleanS])

  return {
    boolean,
    toggle,
  }
}
