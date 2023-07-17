const BASE_URL = 'http://localhost:5000';

export const getTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (taskId, task) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
