import React from 'react';
import styles from './BookContainer.module.css';
import Interaction from './Interaction';

const BookContainer = (props) => {
  const {
    category, completed, name, author, Click, id, chapter,
  } = props;
  return (
    <div className={styles.Book_wrap}>
      <div>
        <p className={styles.genre}>{category}</p>
        <h1 className={styles.title}>{name}</h1>
        <h3 className={styles.author}>{author}</h3>
        <div className={styles.Interaction_wrap}>
          <Interaction name="Comments" />
          <div className={styles.line} />
          <Interaction Click={Click} id={id} name="Remove" />
          <div className={styles.line} />
          <Interaction name="Edit" />
        </div>
      </div>
      <div className={styles.status_wrap}>
        <p className={styles.completed}>
          {completed}
          %
        </p>
        <p className={styles.completedtxt}>Completed</p>
      </div>
      <div>
        <p className={styles.current_chaptertxt}>Current Chapter</p>
        <p className={styles.current_chapter}>
          Chapter
          {chapter}
        </p>
        <div className={styles.update}>
          <Interaction name=" UPDATE PROGRESS" type="button" />
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
