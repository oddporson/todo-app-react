import { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [list, setList] = useState("");

  return (
    <nav className="container">
      <div className="nav">
        <h2>Tasks Lists</h2>
        <form className="add-card">
          <input />
          <button>Add List</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
