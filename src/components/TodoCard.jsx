import "./todocard.css";

const TodoCard = (props) => {
  return (
    <section className="cardlist">
      <div className="card">
        <h2>{props.title}</h2>
        <input />
        <button>+</button>
        <ul>
          <li>Wash dishes</li>
        </ul>
      </div>
    </section>
  );
};

export default TodoCard;
