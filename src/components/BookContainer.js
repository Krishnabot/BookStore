import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Interaction from './Interaction';
import { removeBook } from '../redux/books/books';

const BookContainer = (props) => {
  const booksList = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const {
    category, completed,
  } = props;
  return (booksList.map((book) => (
    <div className="Book-wrap" key={book.id}>
      <div>
        <p className="genre">{category}</p>
        <h1 className="title">{book.title}</h1>
        <h3 className="author">{book.author}</h3>
        <div className="interaction-wrap">
          <Interaction name="Comments" />
          <Interaction Click={() => dispatch(removeBook(book.id))} name="Remove" />
          <Interaction name="Edit" />
        </div>
      </div>
      <div className="status-wrap">
        <p className="completed">
          {completed}
          %
        </p>
        <p className="completed">Completed</p>
      </div>
      <div>
        <p className="currentchapter">Current Chapter</p>
        <p className="currentchapter">
          Chapter
          {book.chapter}
        </p>
        <button className="updateProgress" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  )));
};

export default BookContainer;
