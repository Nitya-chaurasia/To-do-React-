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

    const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };



  return (
    <div className="app-container">
      <h1 className="tittle">TO-DO App</h1>

      <div className="task-input">
        <input
          className="t-input"
          type="text"
          placeholder="Please Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();}
          }}
          
        />
        <button className="btn" onClick={addTask}>Add</button>
      </div>

      <ul className="ul-list">
        {fltrdtasks.map((task) => (
          <li className="li-task" key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => checkUncheck(task.id)}
            />
            <span
              style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.text}
            </span>
             <button className="del-btn" onClick={() => deleteTask(task.id)}>Delete</button>


          </li>
        ))}
      </ul>
      <div className="fltr-btns">
        <button className="fltr-btn" onClick={()=>setFltr("all")}>All</button>
        <button className="fltr-btn" onClick={()=>setFltr("active")}>Active</button>
        <button className="fltr-btn" onClick={()=>setFltr("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default App;
