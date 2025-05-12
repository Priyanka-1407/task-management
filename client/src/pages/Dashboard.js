import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Task List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add New Task</Link>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{task.title}</strong> - {task.completed ? '✅' : '❌'}
            </span>
            <Link to={`/task/${task._id}`} className="btn btn-sm btn-outline-info">Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
