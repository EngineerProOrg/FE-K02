import { useCallback, useMemo, useState } from 'react';

/**
 * 
 * Use Dialog is a hook to control the display of modal
 */
export const useDialog = () => {
  const [visible, setVisible] = useState(false);
  /**
   * @TODO Let's write a hook to handle this logic
   * It should return: 
   * - visible
   * - Actions: 
   *   - open
   *   - close
   * 
   * - let use useCallBack to memo the actions
   * 
   * Eg:
   * const [visible, {open, close}] = useDialog(initialValue)
   */

  const open = useCallback(() => {
    setVisible(true)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
  }, [])

  return [visible, { open, close }]
}