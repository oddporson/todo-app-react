import "./todocardlist.css";

import TodoCardListItem from "./TodoCardListItem";

const TodoCardList = () => {
  return (
    <section className="cardlist">
      <TodoCardListItem title="Task List" />
    </section>
  );
};

export default TodoCardList;
