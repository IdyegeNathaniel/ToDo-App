import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((Prev) => [...Prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((PrvTodos) => {
      return PrvTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center  mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="font-semibold text-3xl">To-Do List</h1>
      </div>

      {/* input */}
      <div className="flex bg-gray-200 items-center my-7 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent h-14 pl-6 pr-2 placeholder:bg-slate-200 border-none outline-none flex-1"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={add}
          className="bg-purple-900 text-white rounded-full h-14 w-32 text-lg font-medium cursor-pointer border-none"
        >
          Add +
        </button>
      </div>

      {/* todo list */}
      <div className="">
        {todoList.map((items, index) => {
          return (
            <TodoItems
              key={index}
              text={items.text}
              id={items.id}
              isComplete={items.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
