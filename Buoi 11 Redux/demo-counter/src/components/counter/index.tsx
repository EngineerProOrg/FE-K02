import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../store/store";
import { decrement, increment, setCountBy } from "../../store/counterSlice";

export const Counter = () => {
  const counter = useSelector((state: AppState) => state.counter.value);
  const countBy = useSelector((state: AppState) => state.counter.countBy);

  const dispatch = useDispatch();

  return <>
    <button onClick={() => {
      dispatch(decrement())
    }}>-</button>
    <span>{counter}</span>
    <button onClick={() => {
      dispatch(increment())
    }}>+</button>
    <input type='number' value={countBy} onChange={(e) => {
      const value = e.target.value;

      dispatch(setCountBy(Number(value)))
    }} />
  </>
}