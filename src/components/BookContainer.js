import React from 'react';
import Interaction from './Interaction';

const BookContainer = (props) => {
  const {
    name, catagory, author, completed, chapter,
  } = props;
  return (
    <div className="Book-wrap">
      <div>
        <p className="genre">{catagory}</p>
        <h1 className="title">{name}</h1>
        <h3 className="author">{author}</h3>
        <div className="interaction-wrap">
          <Interaction name="Comments" />
          <Interaction name="Remove" />
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
          {chapter}
        </p>
        <button className="updateProgress" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default BookContainer;
