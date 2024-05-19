import { UseLayoutEffect, memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";

const ChildComponent = memo(({ value, fn }) => {
  console.log('renderer');

  return <p>Child</p>
})

const UseMemo = () => {
  const [state, setState] = useState(0);

  const value = useMemo(() => { }, [])

  const fn = useCallback(() => {
    console.log('calculate')
    return Array.from(new Array(1000)).map((item, index) => index * 2).reduce((curr, next) => curr + next, 0)
  }, [])

  useEffect(() => {
    console.log('component mounted')
  }, [])


  return (
    <>
      <h2>Count</h2>
      {state}
      <button onClick={() => setState((prev) => prev + 1)}>Add</button>

      <ChildComponent value={value} fn={fn} />
    </>
  );
}

export default UseMemo;