import React from "react";

function TodoInput({ newTask, setNewTask, addTask }) {
  return (
    <div className="task-input">
      <input
        className="t-input"
        type="text"
        placeholder="Please Enter new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />
      <button className="btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
