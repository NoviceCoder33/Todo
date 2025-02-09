import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h1>To-Do App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
