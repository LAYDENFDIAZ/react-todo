import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Todo({ task, deleteTodo, toggleComplete, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask(task.task);
  };

  const handleSave = () => {
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      } rounded-lg shadow`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className="flex-1 px-2 py-1 text-lg rounded"
        />
      ) : (
        <p
          className={`flex-1 text-lg ${
            task.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {task.task}
        </p>
      )}

      <div className="flex items-center">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-600 mx-2"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-yellow-500 hover:text-yellow-600 mx-2"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() => toggleComplete(task.id)}
              className="text-green-500 cursor-pointer hover:text-green-600 mx-2"
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={handleEdit}
              className="text-blue-500 cursor-pointer hover:text-blue-600 mx-2"
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
              className="text-red-500 cursor-pointer hover:text-red-600 mx-2"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Todo;
