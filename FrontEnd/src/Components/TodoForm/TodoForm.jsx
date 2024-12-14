import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../../Services/api';

const TodoForm = () => {
  const [formData, setFormData] = useState({
    id : '' ,
    task: '',
    username: '',
    date: '',
    status: 0,
    task_type: '',
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    if (formData.task.length < 3) return 'Task must be at least 3 characters';
    if (!formData.username) return 'Username is required';
    if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.date)) return 'Date must be in the format YYYY-MM-DD';
    if (!formData.task_type) return 'Task type is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return alert(error);
    console.log(formData);
    await addTodo(formData);
    navigate('/view');
    setFormData({ id :'', task: '', username: '', date: '', status: 0, task_type: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Create a New Task</h2>

      <input type="text" name='id' value={formData.id} onChange={handleChange} hidden/>

      {/* Task Field */}
      <div>
        <label htmlFor="task" className="block text-sm font-medium text-gray-600 mb-2">
          Task
        </label>
        <textarea
          id="task"
          name="task"
          value={formData.task}
          onChange={handleChange}
          placeholder="Enter your task"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          rows="3"
          required
        />
      </div>

      {/* Username Field */}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          required
        />
      </div>

      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          required
        />
      </div>

      {/* Status Field */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="status"
          name="status"
          checked={formData.status}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
        />
        <label htmlFor="status" className="text-sm font-medium text-gray-600">
          Completed
        </label>
      </div>

      {/* Task Type Field */}
      <div>
        <label htmlFor="task_type" className="block text-sm font-medium text-gray-600 mb-2">
          Task Type
        </label>
        <select
          id="task_type"
          name="task_type"
          value={formData.task_type}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          required
        >
          <option value="">Select a type</option>
          <option value="Office">Office</option>
          <option value="Personal">Personal</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        Save Task
      </button>
    </form>
  );
};

export default TodoForm;
