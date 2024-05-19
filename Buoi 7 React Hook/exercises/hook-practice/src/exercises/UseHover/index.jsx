import { useHover } from "./useHover"

export const UseHover = () => {
  const [ref, isHover] = useHover()


  return <div>
    <div ref={ref}>
      Hover me
    </div>
    <div>
      isHover: {isHover ? 'true' : 'false'}
    </div>
  </div>
}