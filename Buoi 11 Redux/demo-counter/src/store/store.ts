import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


const store = configureStore({
  reducer: {
    counter: counterSlice,
  }
});

type GetStateType = typeof store.getState;

export type AppState = ReturnType<GetStateType>
export type DispatchApp = typeof store.dispatch

export default store;

