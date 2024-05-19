import { useCallback, useState } from "react";

/**
 * useList is the hook to manage an array
 */
export const useList = (initialList) => {
  const [list, setList] = useState(initialList);

  /**
   * @TODO Let write hook to provide some util actions to manage the list
   * 
   * push: allow to push the item into the list
   * remove: allow to remove the item from the list
   * clear: clear the list
   * set: set the value at the specific index
   * 
   * Let use useCallBack to wrap the function
   */

  const push = useCallback((value) => {
    setList(prevList => [...prevList, value])
  }, [])

  const set = useCallback((index, value) => {
    setList(prevList => prevList.map((item, _index) => _index === index ? value : item))
  }, [])

  const remove = useCallback((index) => {
    setList(prevList => prevList.filter((_, _index) => index !== _index))
  }, [])

  const clear = useCallback(() => setList([]), [])

  return [list, { push, remove, clear, set }]
}