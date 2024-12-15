import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/AddBook';
import BookUpdateForm from './components/BookUpdate';
import DisplayBooks from './components/DsplyBk_fncCompt'; // Functional component for displaying books
import DeleteBook from './components/DeleteBook'; // Corrected name


function App() {
  return (
    <Router>
      <div className="container">
        <center><h2>OnLine Book Library using React</h2></center>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="navbar-nav">
            <Link to="/" className="navbar-brand"><h4>Add a Book</h4></Link>
            <Link to="/display-books" className="navbar-brand"><h4>Display All Books</h4></Link>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookUpdateForm />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/display-books" element={<DisplayBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
