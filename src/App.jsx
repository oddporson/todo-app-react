import { useState } from "react";

import "./App.css";

// components
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

const App = () => {
  return (
    <main>
      <NavBar />
      <CardList />
    </main>
  );
};

export default App;
