import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { booksActions, postBook } from '../redux/books/booksSlice';
import Style from '../style/Form.module.css';

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
    <div className={Style.formBox}>
      <div>
        <h1>ADD NEW BOOK</h1>
      </div>
      <form onSubmit={onFormSubmit} className={Style.form}>
        <input
          className={Style.titleInput}
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
          className={Style.authorInput}
        />
        <button type="submit" className={Style.formButton}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
