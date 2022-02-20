import "./todocardlistitem.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoCardListItem = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoCardListItem;
