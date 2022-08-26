import React from 'react';
import Interaction from './Interaction';

const BookContainer = (props) => {
  const {
    category, completed, name, author, Click, id, chapter,
  } = props;
  return (
    <div className="Book-wrap">
      <div>
        <p className="genre">{category}</p>
        <h1 className="title">{name}</h1>
        <h3 className="author">{author}</h3>
        <div className="interaction-wrap">
          <Interaction name="Comments" />
          <Interaction Click={Click} id={id} name="Remove" />
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
        <Interaction
          name=" UPDATE PROGRESS"
          className="updateProgress"
          type="button"
        />
      </div>
    </div>
  );
};

export default BookContainer;
