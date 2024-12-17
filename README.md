# To-Do List Application with Axios and JSON-Server

This is a simple To-Do List application built with Axios for API communication, and JSON-Server for simulating a backend server. The application allows you to manage tasks with various fields, validate input forms, and perform CRUD operations.

## Features

- **CRUD Operations** for Tasks (Create, Read, Update, Delete)
- **Task Fields**:
  - Task Description (3+ characters)
  - Username (required)
  - Date (numeric only)
  - Status (Pending = 0, Completed = 1)
  - Task Type (Office, Personal, Family, Friends, Other with corresponding colors)
- **Form Validation** (custom validation for each field)
- **View All Tasks** with Sorting and Pagination
- **Task Status Color Change** (Completed tasks have white background)
- **Search Functionality** for tasks

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **API**: Axios for HTTP requests
- **Backend**: JSON-Server for simulating a backend API
- **Task Management**: CRUD operations for tasks
- **Form Validation**: Custom client-side validation

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (for running JSON-Server)
- npm (for managing dependencies)
- A browser (for viewing the frontend)

## Setting Up the Project

### Step 1: Install Dependencies

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
