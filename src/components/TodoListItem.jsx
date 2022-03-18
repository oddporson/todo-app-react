const TodoListItem = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <li>{todo}</li>
      <button>delete</button>
    </div>
  );
};

export default TodoListItem;
