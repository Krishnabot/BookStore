import React from 'react';
import BookContainer from './BookContainer';
import BookForm from './BookForm';

const Books = () => (
  <>
    <div className="Books-Continer">
      <BookContainer
        name="Harry Potter and Deathly Hallows"
        catagory="fantasy"
        author="J.K. Rowling"
        completed="34"
      />
    </div>
    <BookForm />
  </>
);

export default Books;
