import { useEffect, useRef, useState } from "react"

/**
 * useHover will listen the hover event of that component and update isHover status
 */
export const useHover = () => {
  const ref = useRef();
  const [isHover, setIsHover] = useState(false);

  /**
   * @TODO let use useRef and useEffect to listen to the event hover of the element through DOM APIs
   * 
   * Hint: use the below function to listen hover event
   * 
   * ref.current.addEventListener("mouseover", () => { dosth })
   * ref.current.addEventListener("mouseleave", () => { dosth })
   * 
   * And use the below function in cleanup fn to remove the event
   * 
   * ref.current.removeEventListener("mouseover", () => { dosth })
   * ref.current.removeEventListener("mouseleave", () => { dosth })
   * 
   * This hook should return 
   *  - a ref so that the usage component can inject that ref into component
   *  - a value to indicate whether the component is hovered
   */

  useEffect(() => {
    const onMouseOver = () => {
      setIsHover(true);
    }

    const onMouseLeave = () => {
      setIsHover(false)
    }

    ref.current.addEventListener("mouseover", onMouseOver)
    ref.current.addEventListener("mouseleave", onMouseLeave)

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', onMouseOver);
        ref.current.removeEventListener('mouseleave', onMouseLeave);
      }
    }
  }, [])


  return [ref, isHover]

}