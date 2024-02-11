function ToDoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row ps-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ps-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
