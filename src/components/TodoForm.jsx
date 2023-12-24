import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center p-4"
    >
      <input
        type="text"
        placeholder="Add a todo"
        className="px-4 py-2 border rounded shadow"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
