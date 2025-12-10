import React, { useState } from "react";

import type { TypeTodo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({
  todos,
  setTodos,
}: {
  todos: TypeTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;
}) {
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");

  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content) {
      setErr("ToDo를 입력해주세요");
      return;
    }

    const newTodo = { content, completed: false, id: uuidv4() };

    if (todos) {
      setTodos([...todos, newTodo]);
    } else {
      setTodos([newTodo]);
    }

    setContent("");
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErr("");
    setContent(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmitTodo(e)} className="relative">
      {err && <div>{err}</div>}
      <input
        className="border"
        onChange={(e) => handleChangeContent(e)}
        value={content}
      />
      <button>Add</button>
    </form>
  );
}
