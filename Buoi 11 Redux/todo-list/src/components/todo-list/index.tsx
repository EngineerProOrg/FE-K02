import { useDispatch, useSelector } from "react-redux"
import { AppState, DispatchApp } from "../../store/store"
import { deleteTask, markComplete, markIncomplete } from "../../store/todoSlice";

export const TodoList = () => {
  const todoList = useSelector((state: AppState) => state.todos.todos);
  const dispatch: DispatchApp = useDispatch();

  return <ul>
    {
      todoList.map(todo => (
        <li key={todo.id}>
          <span style={{
            textDecoration: todo.status === 'completed' ? 'line-through' : undefined
          }}>{todo.name}</span>
          {
            todo.status === 'completed' ?
              <button onClick={() => dispatch(markIncomplete(todo.id))}>Mark as incompleted</button>
              :
              <button onClick={() => dispatch(markComplete(todo.id))}>Mark as completed</button>
          }
          <button onClick={() => {
            dispatch(deleteTask(todo.id))
          }}>Delete</button>
        </li>
      ))
    }
  </ul>
}