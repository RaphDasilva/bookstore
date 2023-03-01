import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import booksItems from '../../booksItems';

const initialState = booksItems;
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
