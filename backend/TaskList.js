<TaskList onAdd={deleteTask} />
import React from 'react';
import Task from 'Task';
import { deleteTask } from './api';

const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      onDelete(taskId); // Call the `onDelete` function passed as a prop from `App.js` to update the tasks state in the parent component
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

export default TaskList;
