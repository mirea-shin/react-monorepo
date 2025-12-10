import React, { useEffect, useState } from "react";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import type { TypeTodo, Filter } from "../types/todo";

import styles from "./todo.module.css";

export default function Todos() {
  const getTodos = (): TypeTodo[] => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState<TypeTodo[]>(getTodos());
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <Header setFilter={setFilter} filter={filter} />
        <TodoList todos={todos} setTodos={setTodos} filter={filter} />
        <TodoForm setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}
