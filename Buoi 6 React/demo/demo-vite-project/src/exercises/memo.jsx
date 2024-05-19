import { useState } from "react"


const IncreaseButton = ({ increase }) => {
  console.log('render IncreaseButton')
  return <button onClick={increase}>+</button>
}

const MinusButton = ({ minus }) => {
  console.log('render MinusButton')

  return <button onClick={minus}>
    -
  </button>
}

function App() {
  const [count, setCount] = useState(0);
  console.log('render App')

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <body>
      <MinusButton minus={minus} />
      <span>{count}</span>
      <IncreaseButton increase={increase} />
    </body>
  )
}

export default App
