import React, { useContext } from "react";

import type { TypeTodo, Filter } from "../types/todo";
import ThemeContext from "../hooks/useTheme";
import useTheme from "../hooks/useTheme";

export default function TodoList({
  todos,
  setTodos,
  filter,
}: {
  todos: TypeTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;
  filter: Filter;
}) {
  const { theme } = useTheme();
  // const { theme } = useContext(ThemeContext);

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
          <li key={todo.id}>
            <span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoCheckBox(todo.id)}
              />
              <span>{todo.content}</span>
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
