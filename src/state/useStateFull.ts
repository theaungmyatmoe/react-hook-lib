import {Dispatch, SetStateAction, useMemo, useState} from "react";

type UseStateFullFunction = <T>(initial: T) => [T, Dispatch<SetStateAction<T>>]

export const useStateFull: UseStateFullFunction = <T>(initial) => {
  const [value, setValue] = useState(initial)

  return useMemo<T>(() => {
    return [
      value,
      setValue
    ]
  }, [value])
}
