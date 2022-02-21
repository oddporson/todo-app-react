import { useState } from "react";
import "./navbar.css";

const NavBar = ({ addCard }) => {
  const [list, setList] = useState({ id: "", title: "" });

  return (
    <nav className="container">
      <div className="nav">
        <h2>Tasks Lists</h2>
        <form className="add-card">
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
