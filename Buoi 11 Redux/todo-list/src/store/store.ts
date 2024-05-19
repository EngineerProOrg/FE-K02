import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice
  }
});


export type AppState = ReturnType<typeof store.getState>;
export type DispatchApp = typeof store.dispatch;

export default store;