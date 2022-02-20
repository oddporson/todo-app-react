import { useState } from "react";

import "./App.css";

// components
import NavBar from "./components/NavBar";
import TodoCardList from "./components/TodoCardList";

const App = () => {
  return (
    <main>
      <NavBar />
      <TodoCardList />
    </main>
  );
};

export default App;
