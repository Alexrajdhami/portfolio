import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DisplayBooks() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:5000/"; // Backend URL

  useEffect(() => {
    axios.get(url + "allbooks") // Fetch all books
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>All Books</h3>
      {books.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Topic</th>
              <th>Format</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.booktitle}</td>
                <td>{book.author}</td>
                <td>{book.topic}</td>
                <td>{book.format}</td>
                <td>
                  <Link to={`/edit/${book._id}`} className="btn btn-warning btn-sm">
                    Edit
                  </Link>{" "}
                  <Link to={`/delete/${book._id}`} className="btn btn-danger btn-sm">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
