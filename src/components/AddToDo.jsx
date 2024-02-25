import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row ps-row">
        <div className="col-6">
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Enter Todo here"
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDueDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success ps-button"
            onClick={handleAddButtonClicked}
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
