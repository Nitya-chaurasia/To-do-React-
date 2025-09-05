import "./App.css";
import { useState } from "react";

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
  return (
    <div>
      <h1 className="tittle">TO-DO App</h1>

      <div>
        <input
          type="text"
          placeholder="Please Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();}
          }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {fltrdtasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => checkUncheck(task.id)}
            />
            <span
              style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={()=>setFltr("all")}>All</button>
        <button onClick={()=>setFltr("active")}>Active</button>
        <button onClick={()=>setFltr("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default App;
