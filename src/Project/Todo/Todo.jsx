import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoDate from "./TodoDate";
import {setLocalTodoStorage, getLocalTodoStorage} from "./TodoStorage";
function Todo() {
  const [tasks, setTasks] = useState(() => setLocalTodoStorage());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    // if (tasks.includes(content)) return;
    const ifTodoContentMatched = tasks.find(
      (currentTask) => currentTask.content === content
    );
    if (ifTodoContentMatched) {
      alert("This task already exists");
      return;
    }

    setTasks((prevTask) => [...prevTask, { id, content, checked }]);
  };
  //add data to localStorage
  getLocalTodoStorage(tasks);

  //clear alll
  const handleClearAll = () => {
    setTasks([]);
  };

  //todo checked
  const handleCheckedTodo = (task) => {
    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask.content === task) {
        return { ...currentTask, checked: !currentTask.checked };
      }
      return currentTask;
    });
    setTasks(updatedTasks);
  };
  ///todo delete
  const handleDeleteTodo = (value) => {
    const updatedTask = tasks.filter(
      (currentTask) => currentTask.content !== value
    );
    setTasks(updatedTask);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <TodoDate />

      <TodoForm onAddTodo={handleFormSubmit} />
      <div className="myunorderlist">
        <ul>
          {tasks.map((currentTask) => {
            return (
              <TodoList
                key={currentTask.id}
                data={currentTask.content}
                checked={currentTask.checked}
                onhandleDeleteTodo={handleDeleteTodo}
                onhandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Todo;
