import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SortPropertyEnum } from "../../components/Sort";

enum CategoryEnum {
  all,
  meat,
  spicy,
  vegetarian,
  grill,
  closed,
}

console.log(SortPropertyEnum.rating);
interface ISearchParams {
  category: CategoryEnum;
  sortProperty: SortPropertyEnum;
  searchValue: string;
}

const initialState: ISearchParams = {
  category: CategoryEnum[0],
  sortProperty: SortPropertyEnum.rating,
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

export const { setCategory, setSortProperty, setSearchValue, setFilters } =
  searchParamsSlice.actions;

export default searchParamsSlice.reducer;