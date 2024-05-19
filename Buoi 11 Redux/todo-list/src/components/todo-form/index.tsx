import { useState } from "react"
import { useDispatch } from "react-redux";
import { DispatchApp } from "../../store/store";
import { addTodoTask } from "../../store/todoSlice";

export const TodoForm: React.FC = () => {
  const [todoName, setTodoName] = useState('');
  const dispatch: DispatchApp = useDispatch();

  const onInputName = (e) => setTodoName(e.target.value)

  const onClickAddTodo = () => {
    if (!todoName.length) {
      alert('You should input todo name');
      return;
    }

    dispatch(addTodoTask(todoName));
    setTodoName('');
  }

  return <div>
    <input value={todoName} onChange={onInputName} />
    <button onClick={onClickAddTodo}>Add Todo</button>
  </div>
}