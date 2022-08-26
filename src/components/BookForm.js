/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import Interaction from './Interaction';
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
    dispatch(addBook(state));
    changeState({
      title: '',
      author: '',
      category: '',
    });
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
        <Interaction name="Add Book" />
      </form>
    </>
  );
};

export default BookForm;
