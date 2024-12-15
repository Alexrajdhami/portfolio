import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:5000/";

  useEffect(() => {
    // Delete the book when the component is rendered
    axios.delete(url + "deletebook/" + id)
      .then(() => {
        console.log(`Book with ID ${id} deleted successfully`);
        navigate("/display-books"); // Redirect to the display books page
      })
      .catch(err => console.error(err));
  }, [id, navigate]);

  return (
    <div>
      <h3>Deleting book...</h3>
    </div>
  );
}
