import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { fetchBook, bookUrl } from '../api/consumeAPI';

const ADDINGBOOKS = 'books/ADDINGBOOKS';
const REMOVEBOOKS = 'books/REMOVEBOOKS';

const addBook = createAsyncThunk(
  ADDINGBOOKS,
  async ({ title, author, category }, thunkAPI) => {
    const book = {
      item_id: uuid.create().toString(),
      title,
      author,
      category,
    };
    await axios
      .post(`${bookUrl}/`, book)
      .then(() => thunkAPI.dispatch(fetchBook()));
    const books = thunkAPI.getState().bookList;
    return books;
  },
);

const removeBook = createAsyncThunk(REMOVEBOOKS, async (id, thunkAPI) => {
  await axios
    .delete(`${bookUrl}/${id}`)
    .then(() => thunkAPI.dispatch(fetchBook()));
  const books = thunkAPI.getState.bookList;
  return books;
});

const booksList = (state) => state.bookList;

const storeSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: {
    [fetchBook.fulfilled]: (state, action) => action.payload,
    [addBook.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
});

export {
  addBook, removeBook, booksList, storeSlice,
};
