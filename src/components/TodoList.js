import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { fltrdtasks, checkUncheck, deleteTask } = useContext(TodoContext);
  return (
    <ul className="ul-list">
      {fltrdtasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          checkUncheck={checkUncheck}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
