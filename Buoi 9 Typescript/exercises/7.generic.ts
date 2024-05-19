type UseStateReturnType<StateType> = [StateType, (user: StateType) => void]


const useState = <StateType>(initialValue: StateType): UseStateReturnType<StateType> => {
  const state = initialValue;

  const setState = (val) => {
    state = value
  }

  return [state, setState]
}


const ReactComponent = () => {
  const user: User = {
    type: 'doctor',
    hospital: 'Cho Ray'
  }

  const [state, setState] = useState(user)
}