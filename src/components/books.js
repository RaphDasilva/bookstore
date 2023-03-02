import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let outPut;
  if (isLoading) outPut = <h3>Loading...</h3>;

  if (books?.length > 0) {
    outPut = books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
      />
    ));
  }

  if (!isLoading && books?.length === 0) {
    outPut = <h3>No books to display...</h3>;
  }

  return (
    <>
      <div className="allBooks">
        {outPut}
      </div>
      <Form />
    </>
  );
};

export default Books;
