import axios from "axios";
import generateUniqueId from "generate-unique-id";

// Add a new todo
export const addTodo = async (data) => {
    const id = generateUniqueId({
        length: 4,
        useLetters: false,
    });
    const payload = { ...data, id };

    try {
       
        const response = await axios.post("http://localhost:3200/TodoList", payload);
        console.log("Todo added:", response.data);
        return response.data; 
    } catch (err) {
        console.error("Error adding todo:", err);
    }
};

// Fetch all todos
export const fetchTodos = async () => {
    try {
       
        const response = await axios.get("http://localhost:3200/TodoList");
        return response.data; 
    } catch (err) {
        console.error("Error fetching todos:", err);
    }
};


export const deleteTodo = async (id) => {
    try{
        const response = await axios.delete(`http://localhost:3200/TodoList/${id}`);
        console.log("Todo deleted:", response.data);
        return response.data;
    }catch(err){
        console.error("Error deleting todo:", err);
    }
}