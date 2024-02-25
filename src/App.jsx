import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // alert(`Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoItems>
    </center>
  );
}

export default App;
