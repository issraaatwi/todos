import React from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
