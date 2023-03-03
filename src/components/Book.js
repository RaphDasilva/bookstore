import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/booksSlice';
import style from '../style/books.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removeBookHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(deleteBook(id));
  };
  return (
    <div className={style.book}>
      <div>
        <div className={style.bookInfo}>
          <div className={style.catss}>Action</div>
          <div className={style.title}>{title}</div>
          <div className={style.author}>{author}</div>
        </div>
        <div className={style.bookAction}>
          <div>Comment</div>
          <div className={style.divBar} />
          <button className={style.removeButton} type="button" data-id={id} onClick={removeBookHandler}>Remove</button>
          <div className={style.divBar} />
          <div>Edith</div>
        </div>

      </div>
      <div className={style.others}>
        <div className={style.ovalContainer}>
          <div className={style.Oval} />
        </div>
        <div>
          <div className={style.percentComplete}>64%</div>
          <div className={style.completed}>Completed</div>
        </div>
      </div>
      <div className={style.divBar2} />
      <div className={style.chapterUpdate}>
        <div className={style.currentChapter}>Current Chapter</div>
        <div className={style.currentLesson}>Chapter 17</div>
        <div className={style.updateProgress}>UPDATE PROGRESS</div>
      </div>

    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
