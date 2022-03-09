import { useState } from "react";

import "./App.css";

// components
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

const App = () => {
  const [lists, setLists] = useState([]);

  // Add task list
  const addList = (list) => {
    if (list.title !== "") {
      setLists([...lists, list]);
    }
  };

  // Delete task list
  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };
  return (
    <main>
      <NavBar addList={addList} />
      <CardList lists={lists} deleteList={deleteList} />
    </main>
  );
};

export default App;
