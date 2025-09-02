import "./App.css";

function App() {
  const tasks = [
    { id: 1, text: "Task1", done: false },
    { id: 2, text: "Task2", done: true },
  ];

  return (
    <div>
      <h1 className="tittle">TO-DO App</h1>

      <div>
        <input type="text" placeholder="Please Enter new task..." />
        <button>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" defaultChecked={task.done} />
            {task.text}
            {task.done}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
