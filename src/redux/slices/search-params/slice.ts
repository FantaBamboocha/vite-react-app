import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISearchParams, CategoryEnum, SortPropertyEnum } from "./types";

const initialState: ISearchParams = {
  category: CategoryEnum.ALL,
  sortProperty: SortPropertyEnum.популярности,
  searchValue: "",
};

export const searchParamsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<CategoryEnum>) {
      state.category = action.payload;
    },
    setSortProperty(state, action: PayloadAction<SortPropertyEnum>) {
      state.sortProperty = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action) {
      state.category = action.payload.category;
      state.sortProperty = action.payload.sortBy;
    },
  },
});

export const { setCategory, setSortProperty, setSearchValue } =
  searchParamsSlice.actions;

export { initialState as initialSearchParamsState };

export default searchParamsSlice.reducer;
