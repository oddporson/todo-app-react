import { useState } from "react";
import uuid from "react-uuid";

import "./navbar.css";

const NavBar = ({ addList }) => {
  const [list, setList] = useState({ id: "", title: "" });

  // console.log(generateListId());

  const handleSubmitList = (e) => {
    e.preventDefault();
    addList({ ...list, id: uuid() });
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
