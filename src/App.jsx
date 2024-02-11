import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "8/4/2023",
    },
    {
      name: "Go to Home",
      dueDate: "8/4/2023",
    },
    {
      name: "Like me",
      dueDate: "4/6/2022",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />

      <AddToDo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
