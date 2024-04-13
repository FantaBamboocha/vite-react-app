import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFunctions } from "../../api/api";
import { CategoryEnum } from "./searchParams";
import { SortPropertyEnum } from "../../components/Sort";
interface IReqPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
}

interface IReqPizzaSlice {
  items: IReqPizza[];
  isLoading: boolean;
  error: string | null | undefined;
}

interface IFetchDataArgs {
  category: CategoryEnum;
  sortProperty: SortPropertyEnum;
  searchValue: string;
}

const initialState: IReqPizzaSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const requestData = createAsyncThunk(
  "pizza/requestData",
  async ({ category, sortProperty, searchValue }: IFetchDataArgs) => {
    const pizzaResponse = await apiFunctions.sortData(
      category,
      sortProperty,
      searchValue
    );
    return pizzaResponse as IReqPizza[];
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
