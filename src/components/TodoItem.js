import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ task }) {
  const { checkUncheck, deleteTask } = useContext(TodoContext);
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
