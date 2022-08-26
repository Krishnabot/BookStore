import React from 'react';

const BookInput = (props) => {
  const {
    type, placeholder, change, value, name,
  } = props;
  return (
    <input
      name={name}
      className="book-input"
      type={type}
      onChange={change}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default BookInput;
