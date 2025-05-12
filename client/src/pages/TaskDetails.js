import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${id}`)
      .then(res => setTask(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    navigate('/');
  };

  if (!task) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default TaskDetails;
