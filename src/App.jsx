import React, { useState } from "react";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Todo List
        </h1>
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
