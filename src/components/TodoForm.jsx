import { useState } from "react";
import "./TodoForm.css";

const TodoForm = () => {
  const [task, setTask] = useState({ id: "", todo: "", isCompleted: false });

  return (
    <form className="form">
      <input
        value={task.todo}
        onChange={(e) => setTask({ todo: e.target.value })}
      />
      <button>Add Task</button>
    </form>
  );
};

export default TodoForm;
