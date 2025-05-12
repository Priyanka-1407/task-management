import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/tasks', {
      title,
      description,
      completed: false
    });
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" required value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="btn btn-success" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
