import "./cardlistitem.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const CardListItem = ({ title, deleteList, id }) => {
  // console.log(title);

  return (
    <div className="card">
      <h2>{title}</h2>
      <TodoForm />
      <TodoList />
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
