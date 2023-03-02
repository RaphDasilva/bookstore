/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../../booksItems';

export const postBook = createAsyncThunk('books/postBook',
  async (bookData, thunkAPI) => {
    try {
      const res = await axios.post(`${url}/books`, bookData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went Wrong!',
      );
    }
  });

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const res = await axios(`${url}/books`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data?.message || 'Something went wrong',
    );
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${url}/books/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookData = action.payload;
      state.books.push(bookData);
    },
    removeBook: (state, action) => {
      const idOfBookToRemove = action.payload;
      state.books = state.books.filter(
        (book) => book.item_id !== idOfBookToRemove,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postBook.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const resObject = action.payload;
        const newBooksArr = Object.keys(resObject).map((id) => {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          return bookObj;
        });
        state.books = newBooksArr;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
