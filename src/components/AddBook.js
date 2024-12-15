import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BookForm() {
  const url = "http://localhost:5000/"; // Your backend URL
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    format: "",
    topic: "",
    pubYear: 1990, // Default publication year
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const bookData = { ...state };

    // Send a POST request to the backend
    axios
      .post(url + "addbooks", bookData) // Make sure this is a POST request
      .then((res) => {
        alert("Book added successfully!");
        navigate("/display-books"); // Redirect to display books
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book. Please try again!"); // Show error if the request fails
      });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Topic:</label>
          <select
            className="form-control"
            name="topic"
            value={state.topic}
            onChange={handleChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
          </select>
        </div>
        <div className="form-group">
          <label>Format:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="format"
              value="Hard Copy"
              checked={state.format === "Hard Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Hard Copy</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="format"
              value="Electronic Copy"
              checked={state.format === "Electronic Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Electronic Copy</label>
          </div>
        </div>
        
        {/* Improved Publication Year Input */}
        <div className="form-group">
          <label>Publication Year (1980-2025):</label>
          <div className="d-flex align-items-center">
            <input
              className="form-control-range"
              type="range"
              name="pubYear"
              min="1980"
              max="2025"
              value={state.pubYear}
              onChange={handleChange}
            />
            <span className="ml-2">{state.pubYear}</span> {/* Display selected value */}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
