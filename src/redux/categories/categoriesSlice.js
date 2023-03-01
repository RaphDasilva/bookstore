import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state === []) {
        return 'Under Construction';
      }
      return state;
    },
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
