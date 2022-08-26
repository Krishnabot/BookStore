import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const bookUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/D4PCunlqO0IhsVdMGExZ/books';
const LOADING = 'books/Loading';
const fetchBook = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(bookUrl);
  const { data } = response;
  const Data = Object.keys(data).map((key) => ({
    id: key,
    ...data[key][0],
  }));
  return Data;
});

export { fetchBook, bookUrl };
