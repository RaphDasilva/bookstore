import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  return (
    <div className="oneBook">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" className="bookButton" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
