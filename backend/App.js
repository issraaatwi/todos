import React, { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from './api';
import TaskForm from './TaskForm';
import TaskList from './tasklist';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const createdTask = await createTask(task);
      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const deleteTaskById = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TaskForm onAdd={addTask} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TaskList tasks={tasks} onDelete={deleteTaskById} />
      )}
    </div>
  );
};

export default App;
