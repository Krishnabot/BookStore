/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BookForm.module.css';
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
      alert('No empty ENTRY Allowed');
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
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form_text}>Add New Books</p>
        <div className={styles.inputs}>
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
        </div>
        <button type="submit" className={styles.add_book}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default BookForm;
