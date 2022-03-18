import "./todolist.css";

import TodoListItem from "./TodoListItem";

const TodoList = ({ tasks }) => {
  console.log("hello tasks prop", tasks);

  const mappedTodoListItem = tasks.map((task) => (
    <TodoListItem
      key={task.id}
      id={task.id}
      todo={task.todo}
      isCompleted={task.isCompleted}
    />
  ));

  return (
    <div className="todo-list">
      <ul>{mappedTodoListItem}</ul>
    </div>
  );
};

export default TodoList;
