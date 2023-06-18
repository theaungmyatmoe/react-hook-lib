import {expect, it} from "vitest";
import {act, renderHook} from "@testing-library/react-hooks";
import {useBoolean} from "../main";

it('should be true', () => {
  const {result} = renderHook(() => useBoolean(true))
  const [, actions] = result.current

  expect(result.current[0]).toBe(false)

  act(() => actions.setTrue())

  expect(result.current[0]).toBe(true)
})
