import { useState } from "react";

import "./cardlistitem.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const CardListItem = ({ title, deleteList, id }) => {
  // console.log(title);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.title !== "") {
      console.log("task added");
      setTasks([...tasks, task]);
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button>edit list</button>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
      <button
        onClick={() => {
          deleteList(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CardListItem;
