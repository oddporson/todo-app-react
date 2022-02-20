import "./todocardlistitem.css";
import TodoForm from "./TodoForm";

const TodoCard = (props) => {
  return (
    <section className="cardlist">
      <div className="card">
        <h2>{props.title}</h2>
        <TodoForm />
        <ul>
          <li>Wash dishes</li>
        </ul>
      </div>
    </section>
  );
};

export default TodoCard;
