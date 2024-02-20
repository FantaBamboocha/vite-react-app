import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFunctions } from "../../api/api";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const requestData = createAsyncThunk(
  "pizza/requestData",
  async ({ category, sortProperty, searchValue }) => {
    const pizzaResponse = await apiFunctions.sortData(
      category
      // sortProperty,
      // searchValue
    );
    return pizzaResponse;
  }
);

const reqPizzaSlice = createSlice({
  name: "reqPizza",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(requestData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(requestData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(requestData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default reqPizzaSlice.reducer;
