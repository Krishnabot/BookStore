/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import BookInput from './BookInput';

const BookForm = () => {
  const dispatch = useDispatch();
  const [state, changeState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const eventHandler = (event) => {
    changeState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.title === '') {
      // eslint-disable-next-line no-alert
      alert('No empty ENtrance Allowed');
    } else {
      dispatch(addBook(state));
      changeState({
        title: '',
        author: '',
        category: '',
      });
    }
  };

  return (
    <>
      <h2 className="form-text">Add New Books</h2>
      <form className="form" onSubmit={submitHandler}>
        <BookInput
          name="title"
          type="text"
          value={state.title}
          change={eventHandler}
          placeholder="BooK Tiltle"
        />
        <BookInput
          name="author"
          type="text"
          value={state.author}
          change={eventHandler}
          placeholder="Author"
        />
        <BookInput
          name="category"
          type="text"
          value={state.category}
          change={eventHandler}
          placeholder="category"
        />
        <button type="submit" className="button">
          Add Book
        </button>
      </form>
    </>
  );
};

export default BookForm;
