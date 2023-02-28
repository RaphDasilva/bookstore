import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookId = action.payload;
      state.books.concat(bookId);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books.filter((book) => book.item_id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.actions;
