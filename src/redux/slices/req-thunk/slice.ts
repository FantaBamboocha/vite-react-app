import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { apiFunctions } from "../../../api/api";

import { IReqPizza, IFetchDataArgs, IReqPizzaSlice } from "./types";

const initialState: IReqPizzaSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const requestData = createAsyncThunk<IReqPizza[], IFetchDataArgs>(
  "pizza/requestData",
  async ({ category, sortProperty, searchValue }, { rejectWithValue }) => {
    try {
      const pizzaResponse = await apiFunctions.sortData(
        category,
        sortProperty,
        searchValue
      );
      return pizzaResponse;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

const reqPizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
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
