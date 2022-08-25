import React from 'react';

const BookInput = (props) => {
  const { type, placeholder, refe } = props;
  return <input ref={refe} className="book-input" type={type} placeholder={placeholder} />;
};

export default BookInput;
