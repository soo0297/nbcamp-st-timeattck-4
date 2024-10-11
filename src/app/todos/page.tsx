"use client";

import axios from "axios";
import { useState } from "react";

const todosPage = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTodoInput = (e) => {
    setTodo(e.target.value);
  };

  const addTodos = () => {
    axios.post("http://localhost:4000/todos", todoList);
    setTitle("");
    setTodo("");
  };

  return (
    <>
      <div className="flex">
        <div>
          <label>제목</label>
          <input type="text" value={title} onChange={handleTitleInput} />
        </div>
        <div>
          <label>할일</label>
          <input type="text" value={todo} onChange={handleTodoInput} />
        </div>
        <button onClick={addTodos}>추가하기</button>
      </div>
      <div>
        {todoList.map((todo) => {
          return todo.title;
        })}
      </div>
    </>
  );
};

export default todosPage;
