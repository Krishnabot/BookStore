import React from 'react';
import Interaction from './Interaction';
import BookInput from './BookInput';

const BookForm = () => (
  <>
    <h3 className="form-text">Add New Books!</h3>
    <form className="form">
      <BookInput type="text" placholder="BooK Tiltle" />
      <BookInput type="text" placholder="Author" />
      <Interaction name="Add Book" />
    </form>
  </>
);

export default BookForm;
