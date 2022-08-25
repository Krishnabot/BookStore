import React from 'react';

const BookInput = (props) => {
  const { type, placeholder, refObj } = props;
  return (
    <input
      ref={refObj}
      className="book-input"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default BookInput;
