import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  sortIndex: 0,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setSortIndex(state, action) {
      state.sortIndex = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryIndex, setSortIndex, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
