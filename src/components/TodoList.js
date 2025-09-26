import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ fltrdtasks, checkUncheck, deleteTask }) {
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
