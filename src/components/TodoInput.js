import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="task-input">
      <input
        className="t-input"
        type="text"
        placeholder="Please Enter new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
      />
      <button className="btn" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
