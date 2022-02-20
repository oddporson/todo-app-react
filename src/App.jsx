import { useState } from "react";

import "./App.css";

// components
import NavBar from "./components/NavBar";
import TodoCardList from "./components/TodoCardList";

const App = () => {
  const { cards, setCards } = useState([]);

  return (
    <main>
      <NavBar />
      <TodoCardList />
    </main>
  );
};

export default App;
