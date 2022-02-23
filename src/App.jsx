import { useState } from "react";

import "./App.css";

// components
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

const App = () => {
  const [lists, setLists] = useState([]);

  const addList = (list) => {
    if (list.title !== "") {
      setLists([...lists, list]);
    }
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };
  return (
    <main>
      <NavBar addList={addList} />
      <CardList lists={lists} setLists={setLists} deleteList={deleteList} />
    </main>
  );
};

export default App;
