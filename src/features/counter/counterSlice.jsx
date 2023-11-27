import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVisitors = createAsyncThunk(
  "fetchVisitors",
  async (thunkAPI) => {
    try {
      const response = await fetch("http://localhost:5000/visitor");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.value);
    }
  }
);

export const incrementVisitor = createAsyncThunk(
  "incrementVisitor",
  async (values, thunkAPI) => {
    try {
      await fetch("http://localhost:5000/visitor", {
        method: "POST",
      });
      return values;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.value);
    }
  }
);

const counterSlice = createSlice({
  name: "visitor-counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state, action) => {
      state.value = action.payload + 1;
    },
    getVisitors: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVisitors.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(incrementVisitor.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});
export const { increment, getVisitors } = counterSlice.actions;
export default counterSlice.reducer;
