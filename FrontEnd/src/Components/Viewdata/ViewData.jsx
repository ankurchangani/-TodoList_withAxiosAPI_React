
import React, { useState, useEffect } from "react";
import { fetchTodos, deleteTodo } from "../../Services/api";

const ViewData = () => {
  const [todos, setTodos] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [filteredTodos, setFilteredTodos] = useState([]);
  
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData || []);
        setFilteredTodos(todosData || []);
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const result = todos.filter((todo) =>
      todo.task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(result || []);
  }, [searchQuery, todos]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    const sortedTodos = [...filteredTodos].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.task.localeCompare(b.task);
      } else {
        return b.task.localeCompare(a.task);
      }
    });
    setFilteredTodos(sortedTodos);
    
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const getColorByTaskType = (taskType) => {
    switch (taskType) {
      case "Office":
        return "bg-red-100 border-red-500";
      case "Personal":
        return "bg-yellow-100 border-yellow-500";
      case "Family":
        return "bg-green-100 border-green-500";
      case "Friends":
        return "bg-cyan-100 border-cyan-500";
      case "Other":
        return "bg-gray-100 border-gray-500";
      default:
        return "bg-white border-blue-500";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Todo List</h2>
  
      {/* Search and Sort */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearch}
          className="flex-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Sort Tasks
        </button>
      </div>
  
      {/* Todo List */}
      {filteredTodos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`p-5 shadow-lg rounded-lg border-l-4 ${getColorByTaskType(
                todo.task_type
              )} bg-gray-50`}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">{todo.task}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">By:</span> {todo.username}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Date:</span> {todo.date}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Type:</span> {todo.task_type}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No tasks found.</p>
      )}
    </div>
  );
  
};

export default ViewData;
