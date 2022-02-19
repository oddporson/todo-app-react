import "./todocard.css";

const TodoCard = () => {
  return (
    <section className="cardlist">
      <div className="card">
        <h2>Task List</h2>
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
