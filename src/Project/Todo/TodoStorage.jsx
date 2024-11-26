import React from 'react'
import { useEffect } from 'react';
const todoKey = "react-todos";
export const setLocalTodoStorage=()=>{
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos){
       return [];
    }else{
    return JSON.parse(rawTodos);
    }
}

export const getLocalTodoStorage=(tasks)=>{
  
     return localStorage.setItem(todoKey, JSON.stringify(tasks));
     
}

