import { useState } from "react";
import "./navbar.css";

const NavBar = ({ addList }) => {
  const [list, setList] = useState({ id: "", title: "" });

  // console.log(list);

  const generateListId = () => {
    return Math.random().toString(6).slice(20);
  };

  // console.log(generateListId());

  const handleSubmitList = (e) => {
    e.preventDefault();
    addList({ ...list, id: generateListId() });
    setList({ ...list, title: "" });
  };

  return (
    <nav className="container">
      <div className="nav">
        <h2>Tasks Lists</h2>
        <form className="add-card" onSubmit={handleSubmitList}>
          <input
            value={list.title}
            onChange={(e) => {
              setList({ title: e.target.value });
            }}
          />
          <button>Add List</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
