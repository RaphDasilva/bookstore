import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const onSetTitle = (event) => {
    setTitle(event.target.value);
  };
  const onSetAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
      }),
    );

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="formBox">
      <form onSubmit={onFormSubmit}>
        <input
          className="titleInput"
          type="text"
          placeholder="Title"
          value={title}
          onChange={onSetTitle}
          required
        />
        <input
          type="text"
          value={author}
          onChange={onSetAuthor}
          placeholder="Book author.."
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
