import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const bookStore = combineReducers({
  bookReducer,
  categoryReducer,

});

export default configureStore({
  bookStore,
});
