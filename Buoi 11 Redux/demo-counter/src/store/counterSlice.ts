import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
  countBy: number;
}

const initialState: CounterState = {
  value: 0,
  countBy: 1
}

const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + state.countBy;
    },
    decrement: (state) => {
      state.value = state.value - state.countBy;
    },
    setCountBy: (state, action: PayloadAction<number>) => {
      state.countBy = action.payload
    }
  }
});

const { increment, decrement, setCountBy } = counterSlice.actions;

export { increment, decrement, setCountBy }
export default counterSlice.reducer;