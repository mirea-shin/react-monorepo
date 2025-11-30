import React from "react";

import type { TypeTodo, Filter } from "../types/todo";

export default function TodoList({
  todos,
  setTodos,
  filter,
}: {
  todos: TypeTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;
  filter: Filter;
}) {
  const getTodoList = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        throw new Error("todolist의 filter 값 확인 필요");
    }
  };

  const handleTodoCheckBox = (currTodo: string) => {
    const updated = todos.map((todo) => {
      if (todo.id === currTodo) return { ...todo, completed: !todo.completed };
      else return todo;
    });

    setTodos([...updated]);
  };

  const hanldeDeleteTodo = (currTodo: string) => {
    const filtered = todos.filter((todo) => todo.id !== currTodo);
    setTodos([...filtered]);
  };

  return (
    <ul>
      {getTodoList()?.map((todo) => {
        return (
          <li key={todo.id} className="flex justify-between">
            <span className="flex gap-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoCheckBox(todo.id)}
              />
              <span className={`${todo.completed ? "line-through" : ""}`}>
                {todo.content}
              </span>
            </span>
            <span>
              <button type="button" onClick={() => hanldeDeleteTodo(todo.id)}>
                삭제
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
