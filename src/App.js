import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import { addTodo, toggleTodo, deleteTodo, setFilter } from "./redux/todoSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.items);
  const fltr = useSelector((state) => state.todos.filter);

  const fltrdtasks = tasks.filter((task) => {
    if (fltr === "active") return !task.done;
    if (fltr === "completed") return task.done;
    return true;
  });

  const addTask = (text) => {
    if (text.trim() !== "") dispatch(addTodo(text));
  };

  const checkUncheck = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const setFltrHandler = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="app-container">
      <h1 className="tittle">TO-DO App</h1>
      <TodoInput newTask="" setNewTask={(t) => {}} addTask={(text) => addTask(text)} />
      <TodoList fltrdtasks={fltrdtasks} checkUncheck={checkUncheck} deleteTask={deleteTask} />
      <FilterButtons setFltr={setFltrHandler} />
    </div>
  );
}

export default App;
