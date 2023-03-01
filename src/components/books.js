import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const storedBooks = useSelector((store) => store.books);
  return (
    <>
      <div className="allBooks">
        {
          storedBooks.map((book) => (
            <Book key={book.id} id={book.id} title={book.title} author={book.author} />
          ))
        }
      </div>
      <Form />
    </>
  );
};

export default Books;
