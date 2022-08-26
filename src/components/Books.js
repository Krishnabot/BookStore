import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookContainer from './BookContainer';
import BookForm from './BookForm';
import { removeBook } from '../redux/books/books';
import { fetchBook } from '../redux/api/consumeAPI';

const Books = () => {
  const bookList = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  const removeHandeler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <>
      <div className="Books-Container">
        {bookList.map((book) => (
          <BookContainer
            name={book.title}
            category={book.category}
            author={book.author}
            completed="34"
            id={book.id}
            key={book.key}
            Click={removeHandeler}
            chapter="9"
          />
        ))}
      </div>
      <BookForm />
    </>
  );
};
export default Books;
