import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import TaskDetails from './pages/TaskDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
