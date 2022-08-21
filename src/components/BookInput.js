import React from 'react';

const BookInput = (props) => {
  const { type, placholder } = props;
  return <input className="book-input" type={type} placeholder={placholder} />;
};

export default BookInput;
