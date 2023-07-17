import { getTasks, createTask, updateTask, deleteTask } from './api';
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from 'TaskList';
const App = () => {
    // State and effect hooks
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    const addTask = async (task) => {
      try {
        const createdTask = await createTask(task);
        setTasks([...tasks, createdTask]);
      } catch (error) {
        console.error('Error creating task:', error);
      }
    };
  
    const updateTaskById = async (taskId, task) => {
      try {
        await updateTask(taskId, task);
        // Update the tasks state as needed
      } catch (error) {
        console.error('Error updating task:', error);
      }
    };
  
    const deleteTaskById = async (taskId) => {
      try {
        await deleteTask(taskId);
        // Update the tasks state as needed
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    };
  
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

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
