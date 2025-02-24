"use client";
import React, { useEffect, useState } from "react";

interface Todo {
  text: string;
  status: boolean;
}

const TodoAdvance = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    const storedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") as any);
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, status: false }]);
      setTask("");
    }
  };

  const handleRemoveTodo = (index: any) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App flex flex-col">
      <h1 className="text-center text-xl font-extrabold mb-10">TODO App</h1>
      <div className="todo-input mb-10">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="bg-lime-100 p-3"
        />
        <button onClick={handleAddTodo} className="bg-lime-600 text-white p-3">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex mb-2">
            <div className="bg-red-100 w-full p-1">{todo.text}</div>
            <button
              onClick={() => handleRemoveTodo(index)}
              className="bg-red-600 text-white p-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAdvance;
