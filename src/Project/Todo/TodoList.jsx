import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
function TodoList({id,data, checked,onhandleDeleteTodo, onhandleCheckedTodo}) {
  return (
    <div>
      <li key={id} className="todo-item">
                <span className={checked ? "checklist": "notchecklist"}>{data}</span>

                <button className="check-btn" onClick={()=>onhandleCheckedTodo(data)}>
                  {" "}
                  <CiCircleCheck />
                </button>
                <button className="delete-butn"
                 onClick={()=>onhandleDeleteTodo(data)}>
                  <MdDeleteForever />
                </button>
              </li>
    </div>
  )
}

export default TodoList
