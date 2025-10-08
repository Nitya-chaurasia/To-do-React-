import React from "react";
import TodoItem from "./TodoItem";
import type { TaskType } from "../App";

type TodoListProps = {
  fltrdtasks: TaskType[];
  checkUncheck: (id: number) => void;
  deleteTask: (id: number) => void;
};

function TodoList({ fltrdtasks, checkUncheck, deleteTask }:TodoListProps) {
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
