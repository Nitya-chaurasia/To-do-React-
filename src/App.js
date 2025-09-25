import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task1", done: false },
    { id: 2, text: "Task2", done: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: newTask,
      done: false,
    };

    setTasks([...tasks, newTodo]);
    setNewTask("");
  };
  const checkUncheck = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };
  const [fltr, setFltr] = useState("all");
  const fltrdtasks = tasks.filter((task) => {
    if (fltr === "active") return !task.done;
    if (fltr === "completed") return task.done;
    return true;
  });

    const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1 className="tittle">TO-DO App</h1>
      <TodoInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TodoList fltrdtasks={fltrdtasks} checkUncheck={checkUncheck} deleteTask={deleteTask} />
      <FilterButtons setFltr={setFltr} />
    </div>
  );
}

export default App;
