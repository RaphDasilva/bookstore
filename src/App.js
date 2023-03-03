import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Navbar';
import Books from './components/books';
import Categories from './components/categories';
import { getBooks } from './redux/books/booksSlice';

function App() {
  const { isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let outPut;
  if (isLoading) {
    outPut = (
      <div className="loading">
        <div className="page-loader" />
      </div>
    );
  }

  return (
    <Router>
      <div className="body">
        <div className="allBooks">
          {outPut}
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
