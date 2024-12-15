import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BookUpdateForm() {
  const { id } = useParams();
  const url = "http://localhost:5000/";
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    format: "",
    topic: "",
    pubYear: 1990,
  });

  useEffect(() => {
    axios.get(url + "getbook/" + id)
      .then(res => setState(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(url + "updatebook/" + id, state)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input className="form-control" type="text" name="booktitle" value={state.booktitle} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input className="form-control" type="text" name="author" value={state.author} onChange={handleChange} />
        </div>
        {/* Repeat other fields similar to AddBook */}
        <button type="submit" className="btn btn-success">Update Book</button>
      </form>
    </div>
  );
}
