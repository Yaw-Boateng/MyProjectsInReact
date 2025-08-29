import { useState } from "react";

export default function TodoUI() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAdd = () => {
    if (userInput.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      task: userInput,
    };

    setTodos([...todos, newTodo]);
    setUserInput("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My To-Do List</h1>
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <input
          type="text"
          placeholder="Add a new task..."
          className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-700"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-50 p-4 rounded-xl shadow-sm flex items-center justify-between transition-all duration-200 hover:bg-gray-100"
          >
            <span className="text-lg text-gray-700">{todo.task}</span>
            <button onClick={() => {handleDelete(todo.id)}} class="text-gray-400 hover:text-red-500 transition-all duration-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
