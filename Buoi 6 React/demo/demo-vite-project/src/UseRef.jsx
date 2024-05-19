import { useEffect, useRef, useState } from "react";

const style =

const UseRef = () => {
  const ref = useRef(null);

  console.log('rerender', ref)
  useEffect(() => {
    console.log('in useeffect', ref)
  }, [])

  return <div>
    hello world
  </div>
}

export default UseRef;


/**

const effects = [];
const deps = [];
const prevDeps = []

const useEffect = (setup, deps) => {
  effects.push(setup);
  deps.push(deps);
}

UseRef(props)
 
if have useEffect

registerSetupFn();
registerCleanUpFn();

render(child)

effects.forEach((effect, index) => {
  if(deps[index] !== prevDeps[index]) {
    effect();
  }
})






unmount();

runCleanupFn();


 */