import React from "react";
import type { TaskType } from "../App";

type TodoItemProps = {
  task: TaskType;
  checkUncheck: (id: number) => void;
  deleteTask: (id: number) => void;
};

function TodoItem({ task, checkUncheck, deleteTask }: TodoItemProps) {
  return (
    <li className="li-task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => checkUncheck(task.id)}
      />
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button className="del-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
