import React from "react";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my=3 gap-2">
      <div className="flex flex-1 items-center">
        <input
          type="checkbox"
          onChange={() => {
            toggle(id);
          }}
          className="accent-purple-900 cursor-pointer w-7 h-5"
        />

        <p
          className={`text-stone-800 ml-4 my-2 text-[17px] decoration-slate-500 ${
            isComplete ? " line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
