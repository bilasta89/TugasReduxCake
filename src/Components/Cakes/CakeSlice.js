import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCakes: 99,
  restockCake: 100,
};

const cakeSlice = createSlice({
  name: "KUE",
  initialState,
  reducers: {
    buy: (state) => {
      state.totalCakes--;
    },
    restock: (state) => {
      state.restockCake += 100;
    },
  },
});

export default cakeSlice.reducer;
export const { buy, restock } = cakeSlice.actions;
