import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  sortProperty: "rating",
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortProperty(state, action) {
      state.sortProperty = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilters(state, action) {
      state.category = action.payload.category;
      state.sortProperty = action.payload.sortBy;
    },
  },
});

export const { setCategory, setSortProperty, setSearchValue, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
