import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { booksActions, postBook } from '../redux/books/booksSlice';

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
    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(booksActions.addBook(bookData));
    dispatch(postBook(bookData));

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
