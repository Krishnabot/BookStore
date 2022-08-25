/* eslint-disable import/no-duplicates */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import Interaction from './Interaction';
import BookInput from './BookInput';

const BookForm = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

  return (
    <>
      <h2 className="form-text">Add New Books</h2>
      <form className="form">
        <BookInput refObj={title} type="text" placeholder="BooK Tiltle" />
        <BookInput refObj={author} type="text" placeholder="Author" />
        <Interaction
          name="Add Book"
          Click={() => dispatch(addBook(title.current.value, author.current.value))}
        />
      </form>
    </>
  );
};

export default BookForm;
