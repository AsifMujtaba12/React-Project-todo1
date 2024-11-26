import React from "react";
import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({
      id: value,
      content: value,
      checked: false,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:"", content: "", checked: false});
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Add a todo..."
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-button">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
