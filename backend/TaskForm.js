<TaskForm onAdd={addTask} />
import { createTask } from './api';
const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const newTask = {
      title: formTitle,
      description: formDescription,
    };
    const createdTask = await createTask(newTask);
    onAdd(createdTask); // Call the `onAdd` function passed as a prop from `App.js` to update the tasks state in the parent component
    setFormTitle('');
    setFormDescription('');
  } catch (error) {
    console.error('Error creating task:', error);
  }
};
