import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newText, setNewText] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <div key={task.id} className="task-item">
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button onClick={() => {
                  dispatch(editTask({ id: task.id, newText }));
                  setEditingTaskId(null);
                }}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                <button onClick={() => dispatch(toggleComplete(task.id))}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                <button onClick={() => {
                  setEditingTaskId(task.id);
                  setNewText(task.text);
                }}>Edit</button>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
