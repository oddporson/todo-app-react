import { useState } from "react";
import uuid from "react-uuid";
import "./TodoForm.css";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState({ id: "", todo: "", isCompleted: false });

  const handleSubmitTask = (e) => {
    e.preventDefault();
    addTask({ ...task, id: uuid() });
    setTask({ ...task, todo: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmitTask}>
      <input
        value={task.todo}
        onChange={(e) => setTask({ todo: e.target.value })}
      />
      <button>Add Task</button>
    </form>
  );
};

export default TodoForm;
