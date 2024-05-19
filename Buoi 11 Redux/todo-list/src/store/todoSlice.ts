import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoTask = {
  id: number;
  name: string;
  status: 'completed' | 'pending'
}

type TodoListState = {
  todos: TodoTask[]
}

const initialState: TodoListState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoTask: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: new Date().getTime(),
        name: action.payload,
        status: 'pending'
      })
    },
    markComplete: (state, action: PayloadAction<number>) => {
      const foundTodo = state.todos.find(todo => todo.id === action.payload);

      if (foundTodo) {
        foundTodo.status = 'completed'
      }
    },
    markIncomplete: (state, action: PayloadAction<number>) => {
      const foundTodo = state.todos.find(todo => todo.id === action.payload);

      if (foundTodo) {
        foundTodo.status = 'pending'
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodoTask, markComplete, markIncomplete, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;