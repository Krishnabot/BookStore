import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const bookStore = configureStore({
  reducer: {
    bookReducer,
    categoryReducer,
  },
});

export default bookStore;
