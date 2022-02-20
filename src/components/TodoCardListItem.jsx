import "./todocardlistitem.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoCardListItem = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoCardListItem;
