import "./cardlistitem.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const CardListItem = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default CardListItem;
