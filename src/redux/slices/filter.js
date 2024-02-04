import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  sortProperty: "rating",
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setSortProperty(state, action) {
      state.sortProperty = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilters(state, action) {
      state.categoryIndex = Number(action.payload.category);
      state.sortProperty = action.payload.sortBy;
    },
  },
});

export const { setCategoryIndex, setSortProperty, setSearchValue, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
