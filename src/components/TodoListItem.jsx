import "./todolistitem.css";

const TodoListItem = ({ todo }) => {
  return (
    <div className="listitem">
      <li>{todo}</li>
      <button>delete</button>
      <button>edit</button>
    </div>
  );
};

export default TodoListItem;
