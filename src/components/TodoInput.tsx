import React from "react";
import type { KeyboardEvent } from "react";

type TodoInputProps = {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
};

function TodoInput({ newTask, setNewTask, addTask }: TodoInputProps) {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="task-input">
      <input
        className="t-input"
        type="text"
        placeholder="Please Enter new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
