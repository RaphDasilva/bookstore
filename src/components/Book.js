import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removeBookHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(deleteBook(id));
  };
  return (
    <div className="oneBook">
      <h2>{title}</h2>
      <span>
        {' '}
        By
        {' '}
        {author}
      </span>
      <button type="button" data-id={id} className="bookButton" onClick={removeBookHandler}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
